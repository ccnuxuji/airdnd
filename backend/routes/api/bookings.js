const express = require('express');
const { Booking, Spot, SpotImage } = require('../../db/models');
const { requireAuth,
    requireAuthorization,
    deteleBookingAuthorization } = require('../../utils/auth')
const { checkResourceExist } = require('../../utils/errors')
const { validateBooking } = require('../../utils/validation');

const router = express.Router();

// return all the bookings that the current user has made
router.get(
    '/current',
    requireAuth,
    async (req, res) => {
        const userId = req.user.id;
        const bookings = await Booking.findAll({
            where: {
                userId
            },
            include: [
                {
                    model: Spot,
                    include: [
                        {
                            model: SpotImage
                        }
                    ]
                }
            ]
        });

        let bookingList = [];
        bookings.forEach(booking => {
            bookingList.push(booking.toJSON());
        });

        bookingList.forEach(booking => {
            booking.Spot.previewImage = null;
            if (booking.Spot.SpotImages) {
                booking.Spot.previewImage = booking.Spot.SpotImages.reduce((acc, spotImage) => spotImage.preview ? spotImage.url : acc, null);
                delete booking.Spot.SpotImages;
            }
            delete booking.Spot.description;
        });

        res.json({ Bookings: bookingList });
    }
);

// update and return an existing booking
router.put(
    '/:id',
    requireAuth,
    checkResourceExist,
    requireAuthorization,
    validateBooking,
    async (req, res) => {
        const booking = await Booking.findByPk(req.params.id);
        const { startDate, endDate } = req.body;
        booking.set({ startDate, endDate });
        await booking.save();

        res.json(booking);
    }
);

// delete an existing booking
router.delete(
    '/:id',
    requireAuth,
    checkResourceExist,
    deteleBookingAuthorization,
    async (req, res) => {
        await Booking.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({ "message": "Successfully deleted" });
    }
);

module.exports = router;
