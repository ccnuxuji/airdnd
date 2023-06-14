const express = require('express');
const { User, Spot, Review, SpotImage } = require('../../db/models');
const { requireAuth, requireAuthorization } = require('../../utils/auth')
const { checkResourceExist } = require('../../utils/errors')
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


const router = express.Router();

const validateSpot = [
    check('lat')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid lat.'),
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
    '/:id',
    checkResourceExist,
    async (req, res, next) => {
        const spotId = req.params.id;
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

        const spotDetail = generateSpotDetail(spot);
        res.json(spotDetail);
    }
);

// create a spot
router.post(
    '/',
    requireAuth,
    validateSpot,
    async (req, res) => {
        const ownerId = req.user.id;
        const { address, city, state, country, lat, lng, name, description, price } = req.body;
        const spot = await Spot.create({ ownerId, address, city, state, country, lat, lng, name, description, price });
        res.status(201);
        res.json(spot);
    }
);

// create and return a new image for a spot specified by id
router.post(
    '/:id/images',
    requireAuth,
    checkResourceExist,
    requireAuthorization,
    async (req, res) => {
        const spotId = req.params.id;
        const { url, preview } = req.body;
        const spotImage = await SpotImage.create({ spotId, url, preview });
        const { id } = spotImage;
        res.json({ id, url, preview });
    }
);

// edit a spot
router.put(
    '/:id',
    requireAuth,
    checkResourceExist,
    requireAuthorization,
    validateSpot,
    async (req, res) => {
        const ownerId = req.user.id;
        const { address, city, state, country, lat, lng, name, description, price } = req.body;
        const spot = await Spot.findByPk(req.params.id);
        spot.set({ address, city, state, country, lat, lng, name, description, price });
        await spot.save();

        res.json(spot);
    }
);

// delete a spot
router.delete(
    '/:id',
    requireAuth,
    checkResourceExist,
    requireAuthorization,
    async (req, res) => {
        await Spot.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({"message": "Successfully deleted"});
    }
);

/******************************************************** 
 * Belows are some useful functions
*/

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