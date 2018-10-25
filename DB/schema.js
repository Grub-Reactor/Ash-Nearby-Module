
//Schema option #3, I like this option the best because I can sort the data as it
//comes in by distance. Then the data I need for each part of the component is
//grouped together within either the restaurant card key or the hover key. This will 
//allow me to access the data I need with fewer queries. I have chosen Mongo b/c the data
//I'm dealing with doesn't seem relational so it won't benefit from MySQL's strengths
const restaurantSchema = new mongoose.Schema({
  location: {
    type: 'Point',
    coordinates: [Number, Number], 
    index: {type: '2dsphere'}
  },
  restaurantCard: {
    restaurantName: String,
    imageURL: String,
    cuisine: String,
    deliveryEstimate: String,
    deliveryMin: Number,
    starReviews: String,
    totalReviews: Number,
    favorite: Boolean
  },
  hover: {
    percentWasGood: {type: Number, max: 100},
    percentOnTime: {type: Number, max: 100},
    percentAccuracy: {type: Number, max: 100},
    featuredReview: String
  }
});

db.restaurantSchema.createIndex({ location: '2dsphere' });
