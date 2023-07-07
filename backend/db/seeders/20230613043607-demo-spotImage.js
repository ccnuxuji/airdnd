'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    options.tableName = 'SpotImages';
    return queryInterface.bulkInsert(options, [
      {
        spotId: 1,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: true,
      },
      {
        spotId: 1,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 1,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 1,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 1,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 2,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: true,
      },
      {
        spotId: 2,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 2,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 2,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 2,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 3,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: true,
      },
      {
        spotId: 3,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 3,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 3,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 3,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false
      },
      {
        spotId: 4,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 4,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 4,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 4,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: true,
      },
      {
        spotId: 4,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 5,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: true,
      },
      {
        spotId: 5,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 5,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 5,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 5,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 6,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: true,
      },
      {
        spotId: 6,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 6,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 6,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 6,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 7,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 7,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 7,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 7,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: true,
      },
      {
        spotId: 7,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 8,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: true,
      },
      {
        spotId: 8,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 8,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 8,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 8,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 9,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: true,
      },
      {
        spotId: 9,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 9,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 9,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 9,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 10,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 10,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 10,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 10,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: true,
      },
      {
        spotId: 10,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 11,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: true,
      },
      {
        spotId: 11,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 11,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 11,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 11,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 12,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: true,
      },
      {
        spotId: 12,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 12,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 12,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 12,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 13,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 13,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 13,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 13,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: true,
      },
      {
        spotId: 13,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 14,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: true,
      },
      {
        spotId: 14,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 14,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 14,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 14,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 15,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: true,
      },
      {
        spotId: 15,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 15,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 15,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 15,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 16,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 16,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 16,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 16,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: true,
      },
      {
        spotId: 16,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 17,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: true,
      },
      {
        spotId: 17,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 17,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 17,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 17,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 18,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: true,
      },
      {
        spotId: 18,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 18,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 18,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 18,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 19,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 19,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 19,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 19,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: true,
      },
      {
        spotId: 19,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 20,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: true,
      },
      {
        spotId: 20,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 20,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 20,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 20,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'SpotImages';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      preview: { [Op.in]: [true, false] }
    }, {});
  }
};
