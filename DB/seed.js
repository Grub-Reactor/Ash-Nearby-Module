const db = require('./index.js');
const NearbyRest = require('./schema.js');
const faker = require('faker');

//These helpers generate random numbers for my DB, faker numbers were giving me
//too high numbers. Can't have a delivery minimum of 60,000.
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
  var num = 1;

  for (var i = 0; i < 100; i++) {
    data.push({
      id: num,
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
    num++;
  }
  return data;
};

const nearby = () => {
  NearbyRest.create(restaurantSeed())
    .then(() => db.disconnect());
};

nearby();

