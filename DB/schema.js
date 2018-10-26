const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/RestDB')
mongoose.Promise = global.Promise;
let faker = require('faker');

const restaurantSchema = new mongoose.Schema({
  location: {
    coordinates: [Number, Number], 
  },
  restaurantCard: {
    restaurantName: String,
    imageURL: String,
    cuisine: String,
    deliveryEstimate: {type: Number, min:20, max:90},
    deliveryMin: {type: Number, max: 30},
    starReviews: {type: Number, max: 5},
    totalReviews: {type: Number, max: 1000},
    favorite: {
      type: Boolean,
      default: false
    }
  },  
  hover: {
    percentWasGood: {type: Number, max: 100},
    percentOnTime: {type: Number, max: 100},
    percentAccuracy: {type: Number, max: 100},
    featuredReview: String
  }
});


const NearbyRest = mongoose.model('NearbyRest', restaurantSchema)

module.exports = NearbyRest;