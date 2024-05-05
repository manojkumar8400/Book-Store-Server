const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    // imgs: {

    // },
    menu: {
        type: [{
            name: String,
            price: Number,
            category: String,
        }]
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

module.exports = mongoose.model('Restaurent', restaurantSchema);