const mongoose = require('mongoose');

const favRestaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    userId: {
        type: Number,
        required: true,
    },
    // imgs: {

    // },
    menu: {
        type: [{
            name: String,
            price: Number,
            category: String,
        },{ _id: false }]
    },
    openTime: {
        start: Number,
        close: Number
    },
    location: {
        type: String,
        required: true,
    },
    overAllRating: {
        type: Number,
    },
    distance: {
        type: Number,
        required: true,
    },
    off: {
        type: Number,
    },
    foodType: {
        type: [String]
    }, 
    reviews: {
        type: [{
            description: String,
            rating: Number,
        }]
    }

});

module.exports = mongoose.model('FavRestaurant', favRestaurantSchema);