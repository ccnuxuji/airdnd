const express = require('express');
const { SpotImage } = require('../../db/models');
const { requireAuth, requireAuthorization } = require('../../utils/auth')
const { checkResourceExist } = require('../../utils/errors')

const router = express.Router();

// delete an existing image by image id
router.delete(
    '/:id',
    requireAuth,
    checkResourceExist,
    requireAuthorization,
    async (req, res) => {
        await SpotImage.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({ "message": "Successfully deleted" });
    }
);

module.exports = router;
