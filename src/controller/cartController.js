const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const AddToCart = require('../models/addToCartModel')

exports.addToCart = catchAsyncErrors(async (req, res) => {
  
  const content = req.body

  const cart = await AddToCart.create(content)

  return res.status(201).json({
    statusCode: 201,
    message: 'Data added successfully',
  })
})

exports.cartList = catchAsyncErrors(async (req, res) => {
  
  const userId = req.query.userId
  const cartList = await AddToCart.find({ userId: userId});

  return res.status(200).json({
    statusCode: 200,
    message: 'Data Fetched successfully',
    data: cartList,
  })
})

exports.removeFromCart = catchAsyncErrors(async (req, res) => {
  const itemId = req.query._id

  // Check in DB
  const cartItem = await AddToCart.findById({ _id: itemId })

  if (!cartItem) {
    return res.status(404).json({
      statusCode: 404,
      message: 'Item not found in cart',
    })
  }

  await cartItem.deleteOne()

  res.status(200).json({
    statusCode: 200,
    message: 'Item removed successfully',
  })
})
