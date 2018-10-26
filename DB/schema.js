const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restingdb')
mongoose.Promise = global.Promise;
let faker = require('faker');

const restaurantSchema = new mongoose.Schema({
  id: Number,
  location: {
    coordinates: [Number, Number], 
  },
  restaurantCard: {
    restaurantName: String,
    imageURL: String,
    cuisine: [String, String],
    deliveryEstimate: Number,
    deliveryMin: Number,
    starReviews: Number,
    totalReviews: Number,
    favorite: {
      type: Boolean,
      default: false,
    }
  },  
  hover: {
    percentWasGood: Number,
    percentOnTime: Number,
    percentAccuracy: Number,
    featuredReview: String
  }
});


const NearbyRest = mongoose.model('NearbyRest', restaurantSchema);

module.exports = NearbyRest;