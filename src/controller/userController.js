const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

exports.registerUser = catchAsyncErrors(async (req, res) => {
  const content = req.body

  let user = await User.findOne({ email: content.email })

  if (user) {
    return res.status(409).json({
      statusCode: 409,
      message: 'You are already registered with this email address',
    })
  }
  user = await User.create({
    ...content,
  })
  const { email, password, _id } = user

  const token = jwt.sign({ email, password, _id }, process.env.secretKey, {
    expiresIn: '30d',
  })

  user.token = token
  await user.save()

  return res.status(201).json({
    statusCode: 201,
    message: 'Register successfully!',
    token,
  })
})

exports.userLogin = catchAsyncErrors(async (req, res) => {
  let user = await User.findOne({ email: req.body.email }).select('+password') // schema m password select false kiya tha isiliye yahan select method ka use kiya h
  if (user && req.body.password == user.password && user.token) {
    const { token } = user;
    try {
      // Verify the token using jwt.verify method
      jwt.verify(user.token, process.env.secretKey)
      return res.status(200).json({
        statusCode: 200,
        token,
        message: 'Login successfully',
      })
    } catch (error) {
      const token = jwt.sign({ email: user.email, password: user.password, _id:user._id }, process.env.secretKey, {
        expiresIn: '30d',
      })

      user.token = token
      await user.save();

      return res.status(201).json({
        statusCode: 201,
        token,
        message: 'token created successfully',
      })
    }
  } else {
    return res.status(404).json({
      statusCode: 404,
      message: 'User not found',
    })
  }
})
