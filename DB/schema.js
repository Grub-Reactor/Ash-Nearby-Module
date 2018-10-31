const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restingdb')
mongoose.Promise = global.Promise;
let faker = require('faker');


//Removed location data, will consider re-adding if time permits
const restaurantSchema = new mongoose.Schema({
  id: Number,
  restaurantCard: {
    restaurantName: [String, String],
    cuisine: [String, String],
    deliveryEstimate: Number,
    deliveryMin: Number,
    starReviews: Number,
    totalReviews: Number,
    favorite: {
      type: Boolean,
      default: false,
    },
    imageURL: String,
  },  
  hover: {
    percentWasGood: Number,
    percentOnTime: Number,
    percentAccuracy: Number,
    userName: String,
    userProfile: String,
    featuredReview: String
  }
});


const NearbyRest = mongoose.model('NearbyRest', restaurantSchema);

module.exports = NearbyRest;