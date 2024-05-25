const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const FavRest = require('../models/favRestaurantModel')

exports.favRest = catchAsyncErrors(async (req, res) => {
  
  const content = req.body

  const cart = await FavRest.create(content);

  return res.status(201).json({
    statusCode: 201,
    message: 'Data added successfully',
    cart,
  })
})

exports.favRestList = catchAsyncErrors(async (req, res) => {
  
  const userId = req.query.userId
  const cartList = await FavRest.find({ userId: userId});

  return res.status(200).json({
    statusCode: 200,
    message: 'Data Fetched successfully',
    data:cartList,
  })
})

exports.removeFromFavList = catchAsyncErrors(async (req, res) => {
  const {_id, userId} = req.query;

  const favListRest = await FavRest.findOne({ _id: _id, userId: userId })

  if (!favListRest) {
    return res.status(404).json({
      statusCode: 404,
      message: 'Item not found in fav list',
    })
  }

  await favListRest.deleteOne()

  res.status(200).json({
    statusCode: 200,
    message: 'Item removed from fav list successfully',
  })
})
