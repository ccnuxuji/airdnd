const express = require('express');
const { User, Spot, Review, ReviewImage } = require('../../db/models');
const { requireAuth, requireAuthorization } = require('../../utils/auth')
const { checkResourceExist, validateReviewImageCounts } = require('../../utils/errors')
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const validateReviewImage = [
    check('url')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid url.'),
    handleValidationErrors
];

const validateReview = [
    check('stars')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid star.'),
    check('review')
        .exists({ checkFalsy: true })
        .withMessage('Review text is required'),
    handleValidationErrors
];

const router = express.Router();

// returns all the reviews written by the current user
router.get(
    '/current',
    requireAuth,
    async (req, res) => {
        const id = req.user.id;
        const reviews = await Review.findAll(
            {
                where: {
                    userId: id
                },
                include: [
                    {
                        model: User,
                        attributes: ['id', 'firstName', 'lastName']
                    },
                    {
                        model: Spot,
                        attributes: ['id', 'ownerId', 'address', 'city', 'state', 'country', 'lat', 'lng', 'name', 'price']
                    },
                    {
                        model: ReviewImage,
                        attributes: ['id', 'url']
                    }
                ]
            }
        );

        res.json({ Reviews: reviews });
    }
);

// create and return a new image for a review specified by id
router.post(
    '/:id/images',
    requireAuth,
    checkResourceExist,
    requireAuthorization,
    validateReviewImageCounts,
    validateReviewImage,
    async (req, res) => {
        const reviewId = req.params.id;
        const { url } = req.body;
        const spotImage = await ReviewImage.create({ reviewId, url });
        const { id } = spotImage;
        res.json({ id, url });
    }
);

// update and return an existing review
router.put(
    '/:id',
    requireAuth,
    checkResourceExist,
    requireAuthorization,
    validateReview,
    async (req, res) => {
        const review1 = await Review.findByPk(req.params.id);
        const { review, stars } = req.body;
        review1.set({ review, stars });
        await review1.save();

        res.json(review1);
    }
);

// delete an existing review
router.delete(
    '/:id',
    requireAuth,
    checkResourceExist,
    requireAuthorization,
    async (req, res) => {
        await Review.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({ "message": "Successfully deleted" });
    }
);

module.exports = router;