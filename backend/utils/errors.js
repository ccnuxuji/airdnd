const { User, Spot } = require('../db/models');

const checkResourceExist = async function (req, _res, next) {
    const sourceName = req.originalUrl.split('/')[2];
    let resource;
    let displayName;
    switch (sourceName) {
        case 'spots':
            resource = await Spot.findByPk(req.params.id);
            displayName = 'Spot';
            break;
        case 'users':
            resource = await User.findByPk(req.params.id);
            displayName = 'User';
            break;
        case 'bookings':
            resource = await Booking.findByPk(req.params.id);
            displayName = 'Booking';
            break;
        case 'reviews':
            resource = await Review.findByPk(req.params.id);
            displayName = 'Review';
            break;
        default:
            console.log('Source does not match any case');
            break;
    }
    if (resource) return next();

    const err = new Error(`${displayName} couldn't be found`);
    err.status = 404;
    err.title = `${displayName} couldn't be found`;
    err.errors = { displayName: `No such ${displayName} with the given id ${req.params.id}` };
    return next(err);
}

module.exports = {
    checkResourceExist
};