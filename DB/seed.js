const NearbyRest = require('./schema.js');
const faker = require('faker');


//skeleton for schema
let restaurantSeed = function() {
  let data = [];

  for (var i = 0; i < 100; i++) {
    data.push({
      location: {
        coordinates: [faker.fake('{{address.latitude}}'), faker.fake('{{address.longitude}}')],
      },
      restaurantCard: {
        restaurantName: faker.fake('{{company.companyName}}'),
        imageURL: faker.fake('{{image.food}}'),
        cuisine: faker.fake('{{lorem.word}}'),
        deliveryEstimate: faker.fake('{{random.number}}'),
        deliveryMin: faker.fake('{{random.number}}'),
        starReviews: faker.fake('{{random.number}}'),
        totalReviews: faker.fake('{{random.number}}'),
        favorite: faker.fake('{{random.boolean}}'),
      },
      hover: {
        percentWasGood: faker.fake('{{random.number}}'),
        percentOnTime: faker.fake('{{random.number}}'),
        percentAccuracy: faker.fake('{{random.number}}'),
        featuredReview: faker.fake('{{random.number}}')
      }
    });
    let nearby = new NearbyRest(data);
    nearby.save(function(error, results) {
      if (error) {
        console.log(error);
      } else {
        console.log(results);
      }
    })
  };
  // nearby.createIndex({ location: "2dsphere" })
};

restaurantSeed();


