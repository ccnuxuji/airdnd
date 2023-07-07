'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    options.tableName = 'Spots';
    return queryInterface.bulkInsert(options, [
      {
        ownerId: 1,
        address: "123 Disney Lane",
        city: "San Francisco",
        state: "California",
        country: "United States of America",
        lat: 37.7645358,
        lng: -122.4730327,
        name: "App Academy",
        description: "Welcome to our cozy and stylish retreat, where modern design meets comfort. Enjoy breathtaking views from the balcony and unwind in the luxurious amenities of our urban oasis.",
        price: 450,
      },
      {
        ownerId: 1,
        address: "456 Elm Street",
        city: "San Francisco",
        state: "California",
        country: "United States of America",
        lat: 37.774929,
        lng:  -122.419415,
        name: "Union Square",
        description: "Escape to our charming cottage getaway, nestled in a serene countryside setting. Experience the tranquility of nature while still being just minutes away from local attractions and activities.",
        price: 450,
      },
      {
        ownerId: 1,
        address: "789 Oak Avenue",
        city: "San Francisco",
        state: "California",
        country: "United States of America",
        lat: 37.774801,
        lng: -122.428066,
        name: "Civic Center",
        description: "Indulge in the ultimate luxury experience at our elegant manor estate. Immerse yourself in the grandeur of the historic architecture and pamper yourself with top-notch amenities and personalized service.",
        price: 300,
      },
      {
        ownerId: 1,
        address: "10 Maple Court",
        city: "San Francisco",
        state: "California",
        country: "United States of America",
        lat: 37.788081,
        lng: -122.409024,
        name: "Chinatown",
        description: "Discover a hidden gem at our rustic farmhouse retreat. Relax by the fireplace, explore the nearby hiking trails, and savor the farm-to-table culinary delights from the local markets.",
        price: 345,
      },
      {
        ownerId: 1,
        address: "555 Pine Street",
        city: "San Francisco",
        state: "California",
        country: "United States of America",
        lat: 37.774148,
        lng: -122.437754,
        name: "Fisherman's Wharf",
        description: "Immerse yourself in the vibrant culture and energy of the city at our stylish urban loft. Located in the heart of downtown, our loft offers a modern and convenient base for exploring all the city has to offer.",
        price: 432,
      },
      {
        ownerId: 1,
        address: "987 Cedar Avenue",
        city: "San Francisco",
        state: "California",
        country: "United States of America",
        lat: 37.807827,
        lng: -122.417016,
        name: "Golden Gate Park",
        description: "Unwind in our tranquil mountain lodge, surrounded by breathtaking nature and stunning views. Enjoy outdoor adventures during the day and cozy up by the fireplace in the evenings.",
        price: 145,
      },
      {
        ownerId: 2,
        address: "321 Birch Lane",
        city: "San Francisco",
        state: "California",
        country: "United States of America",
        lat: 37.787994,
        lng: -122.407437,
        name: "Financial District",
        description: "Experience coastal living at its finest in our beachfront condo. Wake up to the sound of waves, soak in the sun on the private balcony, and indulge in seaside activities just steps away.",
        price: 167,
      },
      {
        ownerId: 2,
        address: "654 Willow Drive",
        city: "San Francisco",
        state: "California",
        country: "United States of America",
        lat: 37.774788,
        lng: -122.511502,
        name: "Rustic Farmhouse Retreat",
        description: "Step into our tropical paradise villa and be transported to a world of relaxation and bliss. Dive into the private pool, lounge in the lush gardens, and rejuvenate your senses in the luxurious spa.",
        price: 342,
      },
      {
        ownerId: 2,
        address: "888 Rosewood Avenue",
        city: "San Francisco",
        state: "California",
        country: "United States of America",
        lat: 37.755794,
        lng: -122.420870,
        name: "Luxury City Penthouse",
        description: "Escape the hustle and bustle of the city in our secluded treehouse haven. Disconnect from technology, reconnect with nature, and enjoy a truly unique and enchanting experience.",
        price: 235,
      },
      {
        ownerId: 2,
        address: "777 Magnolia Way",
        city: "San Francisco",
        state: "California",
        country: "United States of America",
        lat: 37.774866,
        lng: -122.419471,
        name: "Quaint Country Cabin",
        description: "Stay in our historic townhouse hideaway and immerse yourself in the charm of the past. Explore the nearby cobblestone streets, visit local landmarks, and indulge in the vibrant nightlife.",
        price: 235,
      },
      {
        ownerId: 2,
        address: "222 Cedar Lane",
        city: "San Francisco",
        state: "California",
        country: "United States of America",
        lat:  37.797820,
        lng: -122.435643,
        name: "Chic Riverside Bungalow",
        description: "Experience the best of both worlds in our chic riverside bungalow. Enjoy the tranquility of the river views, while still being within walking distance of trendy restaurants, shops, and entertainment.",
        price: 200,
      },
      {
        ownerId: 2,
        address: "222 Sycamore Street",
        city: "San Francisco",
        state: "California",
        country: "United States of America",
        lat: 37.761420,
        lng: -122.434380,
        name: "Elegant Manor Estate",
        description: "Find serenity and balance in our Zen garden retreat. Unwind with yoga sessions, meditate in the peaceful surroundings, and rejuvenate your mind, body, and soul.",
        price: 267,
      },
      {
        ownerId: 3,
        address: "333 Aspen Road",
        city: "San Francisco",
        state: "California",
        country: "United States of America",
        lat: 37.764056,
        lng: -122.439078,
        name: "Tropical Paradise Villa",
        description: "Escape to our coastal cottage oasis, where white sandy beaches and gentle ocean breezes await. Relax in the hammock, listen to the waves, and create lasting memories with loved ones.",
        price: 670,
      },
      {
        ownerId: 3,
        address: "444 Juniper Lane",
        city: "San Francisco",
        state: "California",
        country: "United States of America",
        lat: 37.806083,
        lng: -122.416957,
        name: "Contemporary Lakeside Chalet",
        description: "Immerse yourself in the arts and culture scene at our vibrant urban studio. Located in a lively neighborhood, our studio offers easy access to museums, theaters, and eclectic dining options.",
        price: 246,
      },
      {
        ownerId: 3,
        address: "555 Spruce Court",
        city: "San Francisco",
        state: "California",
        country: "United States of America",
        lat: 37.769122,
        lng: -122.482694,
        name: "Historic Townhouse Hideaway",
        description: "Embark on a unique adventure in our mountain view chalet. Enjoy skiing, hiking, and outdoor activities during the day, and cozy up by the fireplace with hot cocoa in the evenings.",
        price: 346,
      },
      {
        ownerId: 3,
        address: "666 Laurel Avenue",
        city: "San Francisco",
        state: "California",
        country: "United States of America",
        lat: 37.757700,
        lng: -122.437601,
        name: "Zen Garden Retreat",
        description: "Experience the magic of our lakeside chalet, where breathtaking views and outdoor adventures await. Fish, kayak, or simply relax by the lake and soak in the tranquility of nature.",
        price: 675,
      },
      {
        ownerId: 3,
        address: "777 Birchwood Drive",
        city: "San Francisco",
        state: "California",
        country: "United States of America",
        lat: 37.773972,
        lng: -122.431297,
        name: "Vibrant Urban Studio",
        description: "Immerse yourself in the charm of our coastal town in our quaint seaside cottage. Enjoy walks on the beach, indulge in fresh seafood, and experience the laid-back coastal lifestyle.",
        price: 360,
      },
      {
        ownerId: 3,
        address: "888 Oakdale Street",
        city: "San Francisco",
        state: "California",
        country: "United States of America",
        lat: 37.798541,
        lng: -122.400860,
        name: "Secluded Treehouse Haven",
        description: "Discover the rich history and architectural beauty of our historic neighborhood from our elegantly restored townhouse. Step back in time while still enjoying modern amenities and comforts.",
        price: 123,
      },
      {
        ownerId: 3,
        address: "999 Elmwood Avenue",
        city: "San Francisco",
        state: "California",
        country: "United States of America",
        lat: 37.750651,
        lng: -122.476940,
        name: "Coastal Cottage Escape",
        description: "Experience the vibrant energy of the city from our centrally located urban studio. Explore the bustling streets, dine at trendy eateries, and immerse yourself in the local culture.",
        price: 200,
      },
      {
        ownerId: 3,
        address: "111 Maplewood Road",
        city: "San Francisco",
        state: "California",
        country: "United States of America",
        lat: 37.741203,
        lng: -122.465228,
        name: "Mountain View Chalet",
        description: "Unwind and rejuvenate in our modern spa retreat. Pamper yourself with luxurious spa treatments, soak in the tranquil atmosphere, and indulge in a blissful escape from the stresses of everyday life.",
        price: 234,
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'Spots';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      ownerId: { [Op.in]: [1, 2, 3] }
    }, {});
  }
};
