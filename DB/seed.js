const NearbyRest = require('./schema.js');
const faker = require('faker');


let restaurantSeed = function() {

  for (var i = 0; i < 100; i++) {
    var data = [];
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
        featuredReview: faker.fake('{{lorem.sentence}}')
      }
    });
    let nearby = new NearbyRest(data);
    console.log(nearby);
    nearby.save(function(error, results) {
      if (error) {
        console.log(error);
      } else {
        console.log(results);
      }
    });
  }
  // nearby.createIndex({ location: "2dsphere" })
};

restaurantSeed();


