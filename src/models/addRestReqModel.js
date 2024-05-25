const mongoose = require('mongoose');

const addRestReqSchema = new mongoose.Schema({
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
    status: {
        type: String,
        default: "Pending"
    }
});

module.exports = mongoose.model('AddRestReq', addRestReqSchema);