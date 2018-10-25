
// //Schema option #1
// const nearbySchema = new mongoose.Schema({
//     restaurant: String,
//     image_URL: String,
//     cuisine: String,
//     delivery_estimate: String,
//     delivery_min: Number,
//     star_reviews: String,
//     total_reviews: Number,
//     percent_was_good: {type: Number, max: 100},
//     percent_on_time: {type: Number, max: 100},
//     percent_accuracy: {type: Number, max: 100},
//     featured_review: String,
//     favorite: Boolean
// })

// //Schema option #2
// const nearbySchema = new mongoose.Schema({
//     restaurant: String,
//     image_URL: String,
//     cuisine: String,
//     delivery_estimate: String,
//     delivery_min: Number,
//     star_reviews: String,
//     total_reviews: Number,
//     hover: {
//         percent_was_good: {type: Number, max: 100},
//         percent_on_time: {type: Number, max: 100},
//         percent_accuracy: {type: Number, max: 100},
//         featured_review: String,
//         favorite: Boolean
//     }
// })



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
    restaurant_card: {
        restaurant_name: String,
        image_URL: String,
        cuisine: String,
        delivery_estimate: String,
        delivery_min: Number,
        star_reviews: String,
        total_reviews: Number,
        favorite: Boolean
    },
    hover: {
        percent_was_good: {type: Number, max: 100},
        percent_on_time: {type: Number, max: 100},
        percent_accuracy: {type: Number, max: 100},
        featured_review: String
    }
})

db.restaurantSchema.createIndex({ location: "2dsphere" })
