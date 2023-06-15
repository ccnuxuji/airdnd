const express = require('express');
const { ReviewImage } = require('../../db/models');
const { requireAuth, requireAuthorization } = require('../../utils/auth')
const { checkResourceExist } = require('../../utils/errors')

const router = express.Router();

// delete an existing image for a review
router.delete(
    '/:id',
    requireAuth,
    checkResourceExist,
    requireAuthorization,
    async (req, res) => {
        await ReviewImage.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({ "message": "Successfully deleted" });
    }
);

module.exports = router;
