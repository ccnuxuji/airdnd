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
        url: 'https://images.pexels.com/photos/2980955/pexels-photo-2980955.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: true,
      },
      {
        spotId: 1,
        url: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 1,
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
        preview: false,
      },
      {
        spotId: 1,
        url: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 1,
        url: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 2,
        url: 'https://images.pexels.com/photos/164338/pexels-photo-164338.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: true,
      },
      {
        spotId: 2,
        url: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 2,
        url: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 2,
        url: 'https://images.pexels.com/photos/1475938/pexels-photo-1475938.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 2,
        url: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 3,
        url: 'https://images.pexels.com/photos/688835/pexels-photo-688835.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: true,
      },
      {
        spotId: 3,
        url: 'https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 3,
        url: 'https://images.pexels.com/photos/314937/pexels-photo-314937.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 3,
        url: 'https://images.pexels.com/photos/2904142/pexels-photo-2904142.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 3,
        url: 'https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false
      },
      {
        spotId: 4,
        url: 'https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 4,
        url: 'https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 4,
        url: 'https://images.pexels.com/photos/1559825/pexels-photo-1559825.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 4,
        url: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: true,
      },
      {
        spotId: 4,
        url: 'https://images.pexels.com/photos/1438834/pexels-photo-1438834.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 5,
        url: 'https://images.pexels.com/photos/1449729/pexels-photo-1449729.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: true,
      },
      {
        spotId: 5,
        url: 'https://images.pexels.com/photos/3221215/pexels-photo-3221215.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 5,
        url: 'https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 5,
        url: 'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 5,
        url: 'https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 6,
        url: 'https://images.pexels.com/photos/356809/pexels-photo-356809.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: true,
      },
      {
        spotId: 6,
        url: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 6,
        url: 'https://images.pexels.com/photos/733291/pexels-photo-733291.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 6,
        url: 'https://images.pexels.com/photos/987550/pexels-photo-987550.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 6,
        url: 'https://images.pexels.com/photos/734102/pexels-photo-734102.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 7,
        url: 'https://images.pexels.com/photos/293983/pexels-photo-293983.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 7,
        url: 'https://images.pexels.com/photos/2611873/pexels-photo-2611873.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 7,
        url: 'https://images.pexels.com/photos/2681640/pexels-photo-2681640.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 7,
        url: 'https://images.pexels.com/photos/2374652/pexels-photo-2374652.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: true,
      },
      {
        spotId: 7,
        url: 'https://images.pexels.com/photos/941228/pexels-photo-941228.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 8,
        url: 'https://images.pexels.com/photos/3100371/pexels-photo-3100371.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: true,
      },
      {
        spotId: 8,
        url: 'https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 8,
        url: 'https://images.pexels.com/photos/3264723/pexels-photo-3264723.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 8,
        url: 'https://images.pexels.com/photos/2901212/pexels-photo-2901212.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 8,
        url: 'https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 9,
        url: 'https://images.pexels.com/photos/270246/pexels-photo-270246.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: true,
      },
      {
        spotId: 9,
        url: 'https://images.pexels.com/photos/3711354/pexels-photo-3711354.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 9,
        url: 'https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 9,
        url: 'https://images.pexels.com/photos/3081701/pexels-photo-3081701.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 9,
        url: 'https://images.pexels.com/photos/3241866/pexels-photo-3241866.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 10,
        url: 'https://images.pexels.com/photos/1794858/pexels-photo-1794858.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 10,
        url: 'https://images.pexels.com/photos/99682/pexels-photo-99682.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 10,
        url: 'https://images.pexels.com/photos/99682/pexels-photo-99682.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 10,
        url: 'https://images.pexels.com/photos/754339/pexels-photo-754339.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: true,
      },
      {
        spotId: 10,
        url: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 11,
        url: 'https://images.pexels.com/photos/2416654/pexels-photo-2416654.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: true,
      },
      {
        spotId: 11,
        url: 'https://images.pexels.com/photos/963715/pexels-photo-963715.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 11,
        url: 'https://images.pexels.com/photos/1120068/pexels-photo-1120068.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 11,
        url: 'https://images.pexels.com/photos/3051551/pexels-photo-3051551.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 11,
        url: 'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 12,
        url: 'https://images.pexels.com/photos/17893082/pexels-photo-17893082/free-photo-of-a-manor-at-the-mortemer-abbey-normandy-france.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: true,
      },
      {
        spotId: 12,
        url: 'https://images.pexels.com/photos/17880733/pexels-photo-17880733/free-photo-of-ivy-growing-on-house.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 12,
        url: 'https://images.pexels.com/photos/17886820/pexels-photo-17886820/free-photo-of-colourful-houses-in-istanbul-turkey.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 12,
        url: 'https://images.pexels.com/photos/17881465/pexels-photo-17881465/free-photo-of-exterior-of-a-traditional-turkish-building.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 12,
        url: 'https://images.pexels.com/photos/17882316/pexels-photo-17882316/free-photo-of-photo-of-an-old-town-architecture-with-a-tower.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 13,
        url: 'https://images.pexels.com/photos/17889077/pexels-photo-17889077/free-photo-of-sunlit-wall-of-house-in-village.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 13,
        url: 'https://images.pexels.com/photos/17878434/pexels-photo-17878434/free-photo-of-a-seagull-on-a-car-roof-in-a-coastal-city.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 13,
        url: 'https://images.pexels.com/photos/17882565/pexels-photo-17882565/free-photo-of-stone-facade-of-a-house.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 13,
        url: 'https://images.pexels.com/photos/17878208/pexels-photo-17878208/free-photo-of-house-with-trees-in-garden.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: true,
      },
      {
        spotId: 13,
        url: 'https://images.pexels.com/photos/17882565/pexels-photo-17882565/free-photo-of-stone-facade-of-a-house.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 14,
        url: 'https://images.pexels.com/photos/248822/pexels-photo-248822.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: true,
      },
      {
        spotId: 14,
        url: 'https://images.pexels.com/photos/1112069/pexels-photo-1112069.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 14,
        url: 'https://images.pexels.com/photos/130853/pexels-photo-130853.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 14,
        url: 'https://images.pexels.com/photos/3455361/pexels-photo-3455361.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 14,
        url: 'https://images.pexels.com/photos/3813470/pexels-photo-3813470.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 15,
        url: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: true,
      },
      {
        spotId: 15,
        url: 'https://images.pexels.com/photos/17849373/pexels-photo-17849373/free-photo-of-a-house-on-the-lakeshore-in-a-village.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 15,
        url: 'https://images.pexels.com/photos/17867432/pexels-photo-17867432/free-photo-of-house-porch-with-blue-door-decorated-with-purple-flowers.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 15,
        url: 'https://images.pexels.com/photos/17132370/pexels-photo-17132370/free-photo-of-narrow-paved-alley-between-houses.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 15,
        url: 'https://images.pexels.com/photos/12132707/pexels-photo-12132707.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 16,
        url: 'https://images.pexels.com/photos/17859102/pexels-photo-17859102/free-photo-of-a-pavement-between-apartment-buildings-in-city.png?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 16,
        url: 'https://images.pexels.com/photos/17872090/pexels-photo-17872090/free-photo-of-house-in-village-under-mountain.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 16,
        url: 'https://images.pexels.com/photos/17871007/pexels-photo-17871007/free-photo-of-house-by-street-in-village.png?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 16,
        url: 'https://images.pexels.com/photos/17869821/pexels-photo-17869821/free-photo-of-neoclassic-style-mansion-with-garden-in-front.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: true,
      },
      {
        spotId: 16,
        url: 'https://images.pexels.com/photos/17865729/pexels-photo-17865729/free-photo-of-facade-of-a-white-building-with-brown-window-frames.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 17,
        url: 'https://images.pexels.com/photos/17854856/pexels-photo-17854856/free-photo-of-horses-on-the-pasture-by-the-house-in-the-countryside.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: true,
      },
      {
        spotId: 17,
        url: 'https://images.pexels.com/photos/17856057/pexels-photo-17856057/free-photo-of-white-wall-of-house.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 17,
        url: 'https://images.pexels.com/photos/17852792/pexels-photo-17852792/free-photo-of-forest-around-houses-in-village.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 17,
        url: 'https://images.pexels.com/photos/17856181/pexels-photo-17856181/free-photo-of-palm-tree-and-trees-near-house-in-village.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 17,
        url: 'https://images.pexels.com/photos/913112/pexels-photo-913112.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 18,
        url: 'https://images.pexels.com/photos/350785/pexels-photo-350785.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: true,
      },
      {
        spotId: 18,
        url: 'https://images.pexels.com/photos/1694360/pexels-photo-1694360.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 18,
        url: 'https://images.pexels.com/photos/3073666/pexels-photo-3073666.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 18,
        url: 'https://images.pexels.com/photos/17847967/pexels-photo-17847967/free-photo-of-house-on-river-bank-in-green-mountains-landscape.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 18,
        url: 'https://images.pexels.com/photos/17845088/pexels-photo-17845088/free-photo-of-modern-car-near-old-traditional-house.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 19,
        url: 'https://images.pexels.com/photos/15713576/pexels-photo-15713576/free-photo-of-a-modern-building-against-clear-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 19,
        url: 'https://images.pexels.com/photos/17845003/pexels-photo-17845003/free-photo-of-white-walls-of-house.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 19,
        url: 'https://images.pexels.com/photos/17841882/pexels-photo-17841882/free-photo-of-close-up-of-a-building-with-traditional-decorated-facade-in-city.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 19,
        url: 'https://images.pexels.com/photos/17834979/pexels-photo-17834979/free-photo-of-aerial-view-of-traditional-houses-in-a-french-village.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: true,
      },
      {
        spotId: 19,
        url: 'https://images.pexels.com/photos/1660994/pexels-photo-1660994.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 20,
        url: 'https://images.pexels.com/photos/17890547/pexels-photo-17890547/free-photo-of-empty-old-town-alley.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: true,
      },
      {
        spotId: 20,
        url: 'https://images.pexels.com/photos/17454325/pexels-photo-17454325/free-photo-of-townscape-on-a-cliff-by-a-sea.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 20,
        url: 'https://images.pexels.com/photos/7026306/pexels-photo-7026306.jpeg?auto=compress&cs=tinysrgb&w=1600',
        preview: false,
      },
      {
        spotId: 20,
        url: 'https://images.pexels.com/photos/15258476/pexels-photo-15258476/free-photo-of-a-window-with-shutters.jpeg?auto=compress&cs=tinysrgb&w=1600',
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
