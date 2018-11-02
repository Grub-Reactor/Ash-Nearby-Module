const db = require('./index.js');
const NearbyRest = require('./schema.js');
const faker = require('faker');
// 

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
  return Math.ceil(number / 5) * 5 + 10;
};

let starMax = function() {
  var precision = 10; // 2 decimals
  var randomNum = Math.floor(Math.random() * (5 * precision - 1 * precision) + 1 * precision) / (1 * precision);
  return randomNum;
};

let deliveryMax = function() {
  var mins = [null, 5, 8, 10, 12, 15, 20];
  let random = Math.floor((Math.random() * 6) + 1);
  return mins[random];
};

let randomImage = function() {
  let image = [
    `https://s3-us-west-1.amazonaws.com/grubreactor/abstract-barbecue-barbeque-bbq-161519.jpeg`,
     `https://s3-us-west-1.amazonaws.com/grubreactor/abstract-barbecue-barbeque-bbq-161519.jpeg`,
     `https://s3-us-west-1.amazonaws.com/grubreactor/brownie-dessert-cake-sweet-45202.jpeg`,
     `https://s3-us-west-1.amazonaws.com/grubreactor/pexels-photo-106343.jpeg`,
     `https://s3-us-west-1.amazonaws.com/grubreactor/pexels-photo-156114.jpeg`,
     `https://s3-us-west-1.amazonaws.com/grubreactor/pexels-photo-236781.jpeg`,
     `https://s3-us-west-1.amazonaws.com/grubreactor/pexels-photo-262959.jpeg`,
     `https://s3-us-west-1.amazonaws.com/grubreactor/pexels-photo-629093.jpeg`,
     `https://s3-us-west-1.amazonaws.com/grubreactor/pexels-photo-718742.jpeg`,
     `https://s3-us-west-1.amazonaws.com/grubreactor/salmon-dish-food-meal-46239.jpeg`];
  
  let index = Math.floor(Math.random()*10);
  return image[index]
}


let restaurantSeed = function() {
  var data = [];
  var num = 1;

  for (var i = 0; i < 100; i++) {
    data.push({
      id: num,
      restaurantCard: {
        restaurantName: [faker.fake('{{commerce.product}}'), " ", faker.fake('{{random.word}}')],
        imageURL: randomImage(),
        cuisine: [faker.fake('{{commerce.productAdjective}}'), ", ", faker.fake('{{random.word}}')],
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
        userName: faker.fake('{{internet.userName}}'),
        userProfile: faker.fake('{{internet.avatar}}'),
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

