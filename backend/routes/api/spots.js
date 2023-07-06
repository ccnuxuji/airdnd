const express = require('express');
const { Op } = require('sequelize');
const { User, Spot, Review, SpotImage, ReviewImage, Booking } = require('../../db/models');
const { requireAuth, requireAuthorization } = require('../../utils/auth')
const {
    checkResourceExist,
    checkReviewDuplicate,
    currentUserCannotBookHisSpots,
    hasOverlapBookings} = require('../../utils/errors')
const {
    validateSpotsQuery,
    validateSpot,
    validateBooking,
    validateReview,
    validateSpotImage} = require('../../utils/validation');

const router = express.Router();

// get all spots
router.get(
    '/',
    validateSpotsQuery,
    async (req, res) => {
        let { page, size, maxLat, minLat, minLng, maxLng, minPrice, maxPrice } = req.query;

        // pagination
        if (!page) page = 1;
        if (!size) size = 20;
        let pagination = {
            limit: size,
            offset: (page - 1) * size
        }

        // filter for lat, lng, price
        let where = {};
        let lat = {}, lng = {}, price = {};
        if (maxLat) lat[Op.lte] = maxLat;
        if (minLat) lat[Op.gte] = minLat;
        if (maxLng) lng[Op.lte] = maxLng;
        if (minLng) lng[Op.gte] = minLng;
        if (maxPrice) price[Op.lte] = maxPrice;
        if (minPrice) price[Op.gte] = minPrice;
        if (minLat || maxLat) where.lat = lat;
        if (minLng || maxLng) where.lng = lng;
        if (maxPrice || minPrice) where.price = price;

        const spots = await Spot.findAll({
            where,
            ...pagination,
            include: [
                { model: SpotImage },
                {
                    model: User,
                    as: 'Owner'
                },
                { model: Review }
            ]
        });

        let spotList = [];
        spots.forEach(spot => {
            spotList.push(spot.toJSON());
        });

        modifySpots(spotList);
        res.json({
            Spots: spotList,
            page,
            size
        });
    }
);

// get all spots owned by the current user
router.get(
    '/current',
    requireAuth,
    validateSpotsQuery,
    async (req, res) => {
        const id = req.user.id;
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

        let spotList = [];
        spots.forEach(spot => {
            spotList.push(spot.toJSON());
        });

        modifySpots(spotList);
        res.json({ Spots: spotList });
    }
);

// get details for a spot from an id
router.get(
    '/:id',
    checkResourceExist,
    async (req, res, next) => {
        const spotId = req.params.id;
        let spot = await Spot.unscoped().findOne({
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

        spot = spot.toJSON();

        generateSpotDetail(spot);
        res.json(spot);
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
    validateSpotImage,
    async (req, res) => {
        const spotId = req.params.id;
        const images = req.body;
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
        const spot = await Spot.unscoped().findByPk(req.params.id);
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
        res.json({ "message": "Successfully deleted" });
    }
);

// returns all the reviews that belong to a spot specified by id
router.get(
    '/:id/reviews',
    requireAuth,
    checkResourceExist,
    async (req, res) => {
        const id = req.params.id;
        const reviews = await Review.findAll(
            {
                where: {
                    spotId: id
                },
                include: [
                    {
                        model: User,
                        attributes: ['id', 'firstName', 'lastName']
                    },
                    {
                        model: ReviewImage,
                        attributes: ['id', 'url']
                    }
                ]
            }
        );

        let reviewList = [];
        reviews.forEach(review => {
            reviewList.push(review.toJSON());
        });

        res.json({ Reviews: reviewList });
    }
);

// create and return a new review for a spot specified by id
router.post(
    '/:id/reviews',
    requireAuth,
    checkResourceExist,
    checkReviewDuplicate,
    validateReview,
    async (req, res) => {
        const spotId = req.params.id;
        const userId = req.user.id;
        const { review, stars } = req.body;
        const review1 = await Review.create({ userId, spotId, review, stars });
        res.status(201);
        res.json(review1);
    }
);

// return all the bookings for a spot specified by id
router.get(
    '/:id/bookings',
    requireAuth,
    checkResourceExist,
    async (req, res) => {
        const { ownerId } = await Spot.findByPk(req.params.id);

        if (req.user.id !== ownerId) {
            const bookings = await Booking.findAll({
                where: {
                    spotId: req.params.id
                },
                attributes: ['spotId', 'startDate', 'endDate']
            });
            return res.json({ Bookings: bookings });
        }

        if (req.user.id === ownerId) {
            const bookings = await Booking.findAll({
                where: {
                    spotId: req.params.id
                },
                include: [
                    {
                        model: User,
                        attributes: ['id', 'firstName', 'lastName']
                    }
                ]
            });
            return res.json({ Bookings: bookings });
        }
    }
);

// create and return a new booking from a spot specified by id
router.post(
    '/:id/bookings',
    requireAuth,
    checkResourceExist,
    currentUserCannotBookHisSpots,
    hasOverlapBookings,
    validateBooking,
    async (req, res) => {
        const spotId = req.params.id;
        const userId = req.user.id;
        const { startDate, endDate } = req.body;
        const booking = await Booking.create({ userId, spotId, startDate, endDate });
        res.json(booking);
    }
);

/******************************************************** 
 * Belows are some useful functions
*/

function modifySpots(spots) {
    spots.forEach(spot => {
        const reviews = spot.Reviews;
        const sumRating = reviews.reduce((acc, review) => acc + review.stars, 0);
        spot.avgRating = reviews.length === 0 ? null : (sumRating / reviews.length);
        spot.avgRating = Math.round(spot.avgRating * 10) / 10;

        spot.previewImage = null;
        if (spot.SpotImages) {
            spot.previewImage = spot.SpotImages.reduce((acc, spotImage) => spotImage.preview ? spotImage.url : acc, null);
            delete spot.SpotImages;
        }

        delete spot.Owner;
        delete spot.Reviews;
    });
}

function generateSpotDetail(spot) {
    const reviews = spot.Reviews;
    const numReviews = reviews.length;
    const sumRating = reviews.reduce((acc, review) => acc + review.stars, 0);
    spot.avgStarRating = reviews.length === 0 ? null : (sumRating / reviews.length);
    spot.avgStarRating = Math.round(spot.avgStarRating * 10) / 10;
    spot.numReviews = numReviews;
    delete spot.Reviews;
}

module.exports = router;