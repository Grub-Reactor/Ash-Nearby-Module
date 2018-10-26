const db = require('./index.js');
const NearbyRest = require('./schema.js');
const faker = require('faker');

let percentHelper = function() {
  let result = Math.floor((Math.random() * 100) + 1);
  return result;
};

let mediumMax = function() {
  return Math.floor((Math.random() * 500) + 1);
};

let roundedMax = function() {
  let number = Math.floor((Math.random() * 100) + 1);
  Math.round((number / 10) * 10);
};

let starMax = function() {
  var precision = 100; // 2 decimals
  var randomNum = Math.floor(Math.random() * (10 * precision - 1 * precision) + 1 * precision) / (1 * precision);
  return randomNum;
};

let deliveryMax = function() {
  var mins = [null, 5, 8, 10, 12, 15, 20];
  let random = Math.floor((Math.random() * 6) + 1);
  return mins[random];
};



let restaurantSeed = function() {
  var data = [];

  for (var i = 0; i < 100; i++) {
    data.push({
      location: {
        coordinates: [faker.fake('{{address.latitude}}'), faker.fake('{{address.longitude}}')],
      },
      restaurantCard: {
        restaurantName: faker.fake('{{company.companyName}}'),
        imageURL: faker.fake('{{image.food}}'),
        cuisine: [faker.fake('{{lorem.word}}'), faker.fake('{{lorem.word}}')],
        deliveryEstimate: roundedMax(),
        deliveryMin: deliveryMax(),
        starReviews: starMax(),
        totalReviews: mediumMax(),
        favorite: faker.fake('{{random.boolean}}'),
      },
      hover: {
        percentWasGood: percentHelper(),
        percentOnTime: percentHelper(),
        percentAccuracy: percentHelper(),
        featuredReview: faker.fake('{{lorem.sentence}}')
      }
    });
    // let nearby = new NearbyRest(data);
    // nearby.save(function(error, results) {
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     console.log(results);
    //   }
    // });
  }
  // nearby.createIndex({ location: "2dsphere" })
  return data;
};
const nearby = () => {
  NearbyRest.create(restaurantSeed())
    .then(() => db.disconnect());
};

nearby();

