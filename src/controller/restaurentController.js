const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const Restaurent = require('../models/restaurentModel')

exports.restaurentList = catchAsyncErrors(async (req, res) => {

    const restraurent = await Restaurent.find();

    return res.status(200).json({
        statusCode: 200,
        data:restraurent,
        message: "Data Fetched successfully"
    });
});

exports.searchRestaurent = catchAsyncErrors(async (req, res) => {

    const searchTerm = new RegExp(req.query.name, 'i'); // 'i' flag for case-insensitive search
    const query = {
        $or: [
            { name: searchTerm }, // Search in the 'name' field
            { menu: { $elemMatch: { $regex: searchTerm } } } // Search in the 'menu' array's 'name' subfield
        ]
    };
    
    const content = await Restaurent.find(query);
    
    return res.status(200).json({
        statusCode: 200,
        data:content,
        message: "Data fetched successfully"
    });
});