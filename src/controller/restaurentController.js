const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const Restaurent = require('../models/restaurentModel')

exports.addRestaurents = catchAsyncErrors(async (req, res) => {
    const content = req.body;

    const restraurent = await Restaurent.findOne({ name: content.name });

    if(!restraurent){
        const restraurent = await Restaurent.create({ ...content });
        
        return res.status(201).json({
            statusCode: 201,
            message: 'Data added successfully',
            restraurent
        });
    } else {
        return res.status(400).json({
            statusCode: 400,
            message: 'This Restaurent already exists',
            restraurent
        })
    }
});

exports.restaurentList = catchAsyncErrors(async (req, res) => {

    const restraurent = await Restaurent.find();

    return res.status(200).json({
        statusCode: 200,
        restraurent,
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
        content,
        message: "Data fetched successfully"
    });
});