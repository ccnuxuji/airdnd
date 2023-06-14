const express = require('express');
const { User, Spot, Review, SpotImage } = require('../../db/models');
const { requireAuth } = require('../../utils/auth')
const { check } = require('express-validator');
const router = express.Router();

const validateSpot = [
    check('lat')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a valid email.'),
    handleValidationErrors
];

// get all spots
router.get(
    '/',
    async (req, res) => {
        const spots = await Spot.findAll({
            include: [
                { model: SpotImage },
                {
                    model: User,
                    as: 'Owner'
                },
                { model: Review }
            ]
        });

        const modifiedSpots = modifySpots(spots);
        res.json(modifiedSpots);
    }
);

// get all spots owned by the current user
router.get(
    '/current',
    requireAuth,
    async (req, res) => {
        const { id } = await User.findOne({
            where: {
                email: req.user.email
            }
        });

        console.log("Current user id is: " + id);
        const spots = await Spot.findAll(
            {
                where: {
                    ownerId: id
                },
                include: [
                    { model: SpotImage },
                    {
                        model: User,
                        as: 'Owner'
                    },
                    { model: Review }
                ]
            }
        );

        const modifiedSpots = modifySpots(spots);
        res.json(modifiedSpots);
    }
);

// get details for a spot from an id
router.get(
    '/:spotId',
    async (req, res, next) => {
        const spotId = req.params.spotId;
        const spot = await Spot.findOne({
            where: {
                id: spotId
            },
            include: [
                {
                    model: SpotImage,
                    attributes: ['id', 'url', 'preview']
                },
                {
                    model: User,
                    as: 'Owner',
                    attributes: ['id', 'firstName', 'lastName']
                },
                { model: Review }
            ]
        });

        // spot not found
        if (!spot) {
            const err = new Error("Spot couldn't be found");
            err.status = 404;
            err.title = "Spot couldn't be found";
            err.errors = { Spot: "No such Spot with the given id " + spotId };
            return next(err);
        }

        const spotDetail = generateSpotDetail(spot);
        res.json(spotDetail);
    }
);

// create a spot
router.post(
    '/',

);

function modifySpots(spots) {
    return spots.map(spot => {
        const reviews = spot.Reviews;
        const sumRating = reviews.reduce((acc, review) => acc + review.stars, 0);
        const avgRating = reviews.length === 0 ? null : (sumRating / reviews.length).toFixed(1);
        const previewImage = 'to be added';
        const { id, ownerId, address, city, state, country, lat, lng, name, description, price, createdAt, updatedAt } = spot;
        return { id, ownerId, address, city, state, country, lat, lng, name, description, price, createdAt, updatedAt, avgRating, previewImage };
    });
}

function generateSpotDetail(spot) {
    const reviews = spot.Reviews;
    const numReviews = reviews.length;
    const sumRating = reviews.reduce((acc, review) => acc + review.stars, 0);
    const avgRating = reviews.length === 0 ? null : (sumRating / reviews.length).toFixed(1);
    const { id, ownerId, address, city, state, country, lat, lng, name, description, price, createdAt, updatedAt, SpotImages, Owner } = spot;
    return { id, ownerId, address, city, state, country, lat, lng, name, description, price, createdAt, updatedAt, numReviews, avgRating, SpotImages, Owner };
}

module.exports = router;