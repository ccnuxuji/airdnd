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
    options.tableName = 'Reviews';
    return queryInterface.bulkInsert(options, [
      {
        userId: 1,
        spotId: 1,
        review: "This spot exceeded my expectations! The location was perfect, and the amenities were top-notch. The host was very friendly and provided great recommendations for local attractions. I highly recommend staying here!",
        stars: 4,
      },
      {
        userId: 1,
        spotId: 2,
        review: "I had a pleasant stay at this spot. The host was responsive and made sure I had everything I needed. The spot was clean and comfortable. I would consider staying here again.",
        stars: 3,
      },
      {
        userId: 1,
        spotId: 3,
        review: "I absolutely loved this spot! The views were breathtaking, and the accommodations were luxurious. The host went above and beyond to ensure a memorable stay. I would give it 5 stars without hesitation!",
        stars: 5,
      },
      {
        userId: 1,
        spotId: 4,
        review: "I had a great experience at this spot. The host was welcoming and provided a comfortable stay. The location was convenient, and the spot had all the necessary amenities. I would recommend it to others.",
        stars: 3,
      },
      {
        userId: 1,
        spotId: 5,
        review: "What an amazing spot! The accommodations were outstanding, and the host was incredibly hospitable. I had a fantastic time exploring the surrounding area and enjoying the beautiful scenery. Highly recommended!",
        stars: 5,
      },
      {
        userId: 1,
        spotId: 6,
        review: "I thoroughly enjoyed my stay at this spot. The host was attentive and provided excellent service. The spot itself was cozy and had everything I needed. I would definitely book again.",
        stars: 4,
      },
      {
        userId: 2,
        spotId: 7,
        review: "I had a pleasant stay at this spot. The host was friendly and responsive to my needs. The spot was clean and comfortable. Overall, it was a good experience.",
        stars: 3,
      },
      {
        userId: 2,
        spotId: 8,
        review: "This spot exceeded my expectations! The location was perfect, and the spot was beautifully decorated. The host was very accommodating and made me feel right at home. I would definitely stay here again!",
        stars: 5,
      },
      {
        userId: 2,
        spotId: 9,
        review: "I had a nice stay at this spot. The host was helpful and provided clear instructions. The spot had a cozy atmosphere and was well-maintained. I would recommend it to others.",
        stars: 3,
      },
      {
        userId: 2,
        spotId: 10,
        review: "This spot was fantastic! The host was incredibly welcoming, and the spot itself was spacious and comfortable. The location was ideal, with plenty of nearby attractions. I highly recommend it!",
        stars: 5,
      },
      {
        userId: 2,
        spotId: 11,
        review: "I had a great time at this spot. The host was friendly and attentive, making sure I had everything I needed. The spot was clean and had a charming atmosphere. I would stay here again.",
        stars: 4,
      },
      {
        userId: 2,
        spotId: 12,
        review: "I thoroughly enjoyed my stay at this spot. The host was accommodating and provided helpful recommendations for local dining. The spot was comfortable and had a unique charm. Highly recommended!",
        stars: 3,
      },
      {
        userId: 2,
        spotId: 13,
        review: "This spot exceeded my expectations! The host was exceptional and went above and beyond to ensure a memorable stay. The spot itself was beautiful, with stunning views and luxurious amenities. 5 stars!",
        stars: 5,
      },
      {
        userId: 3,
        spotId: 14,
        review: "I had a pleasant stay at this spot. The host was friendly and responsive, making the check-in process easy. The spot was clean and provided a comfortable experience. Would consider staying here again.",
        stars: 3,
      },
      {
        userId: 3,
        spotId: 15,
        review: "What a fantastic spot! The host was welcoming and provided great recommendations for nearby attractions. The spot had everything I needed and more. Highly recommended for a memorable stay!",
        stars: 5,
      },
      {
        userId: 3,
        spotId: 16,
        review: "I had a wonderful time at this spot. The host was attentive and ensured I had a comfortable stay. The spot itself was cozy and well-maintained. I would definitely stay here again.",
        stars: 4,
      },
      {
        userId: 3,
        spotId: 17,
        review: "I had a good experience at this spot. The host was friendly and provided all the necessary information. The spot was clean and had a nice ambiance. I would recommend it to others.",
        stars: 3,
      },
      {
        userId: 3,
        spotId: 18,
        review: "This spot was absolutely amazing! The host was incredibly welcoming and made me feel at home. The spot had breathtaking views and luxurious amenities. I couldn't have asked for a better experience!",
        stars: 5,
      },
      {
        userId: 3,
        spotId: 19,
        review: "I had a comfortable stay at this spot. The host was helpful and provided clear instructions. The spot had all the necessary amenities and was conveniently located. Would consider staying here again.",
        stars: 3,
      },
      {
        userId: 3,
        spotId: 20,
        review: "This spot was incredible! The host was friendly and made me feel welcome. The spot itself was beautifully decorated and had a cozy atmosphere. I highly recommend it!",
        stars: 5,
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
    options.tableName = 'Reviews';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      userId: { [Op.in]: [1, 2, 3] }
    }, {});
  }
};
