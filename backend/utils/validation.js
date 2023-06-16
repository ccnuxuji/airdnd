// backend/utils/validation.js
const { check, validationResult } = require('express-validator');

// middleware for formatting errors from express-validator middleware
// (to customize, see express-validator's documentation)
const handleValidationErrors = (req, _res, next) => {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    const errors = {};
    validationErrors
      .array()
      .forEach(error => errors[error.path] = error.msg);

    const err = Error("Bad request.");
    err.errors = errors;
    err.status = 400;
    err.title = "Bad request.";
    next(err);
  }
  next();
};

const validateSpotsQuery = [
  check('page')
    .optional()
    .isInt({ min: 1, max: 10 })
    .withMessage('Page must be greater than or equal to 1'),
  check('size')
    .optional()
    .isInt({ min: 1, max: 20 })
    .withMessage('Page must be greater than or equal to 1'),
  check('minLat')
    .optional()
    .isFloat({ min: -180, max: 180 })
    .withMessage('Minimum latitude is invalid'),
  check('maxLat')
    .optional()
    .isFloat({ min: -180, max: 180 })
    .withMessage('Maximum latitude is invalid'),
  check()
    .custom((value, { req }) => {
      // Validate if minLat is less than maxLat
      const minLat = parseFloat(req.query.minLat);
      const maxLat = parseFloat(req.query.maxLat);
      if (minLat >= maxLat) {
        throw new Error('Minimum latitude should be less than maximum latitude');
      }
      return true;
    }),
  check('minLng')
    .optional()
    .isFloat({ min: -180, max: 180 })
    .withMessage('Minimum longitude is invalid'),
  check('maxLng')
    .optional()
    .isFloat({ min: -180, max: 180 })
    .withMessage('Maximum longitude  is invalid'),
  check()
    .custom((value, { req }) => {
      // Validate if minLng is less than maxLng
      const minLng = parseFloat(req.query.minLng);
      const maxLng = parseFloat(req.query.maxLng);
      if (minLng >= maxLng) {
        throw new Error('Minimum longitude should be less than maximum longitude');
      }
      return true;
    }),
    check('minPrice')
    .optional()
    .isFloat({ min: 0 })
    .withMessage('Minimum price must be greater than or equal to 0'),
  check('maxPrice')
    .optional()
    .isFloat({ min: 0})
    .withMessage('Maximum price must be greater than or equal to 0'),
  check()
    .custom((value, { req }) => {
      // Validate if minLat is less than maxLat
      const minPrice = parseFloat(req.query.minPrice);
      const maxPrice = parseFloat(req.query.maxPrice);
      if (minPrice && maxPrice && minPrice >= maxPrice) {
        throw new Error('Minimum price should be less than maximum price');
      }
      return true;
    }),
  handleValidationErrors
];

const validateSpot = [
  check('lat')
    .isFloat({ min: -180, max: 180 })
    .withMessage('longitude is invalid'),
  handleValidationErrors
];

const validateBooking = [
  check('startDate')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a valid startDate.'),
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

const validateSpotImage = [
  check('url')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a valid url.'),
  handleValidationErrors
];

module.exports = {
  handleValidationErrors,
  validateSpotsQuery,
  validateSpot,
  validateBooking,
  validateReview,
  validateSpotImage
};