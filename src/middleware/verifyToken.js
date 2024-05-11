const jwt = require('jsonwebtoken')

module.exports = verifyToken = (req, res, next) => {
  
  if (req.headers['authorization']) {
    const bearerToken = req.headers['authorization']
   
    if (bearerToken.startsWith('Bearer ')) {
      const token = bearerToken.split(' ')[1]
      const decoded = jwt.verify(token, process.env.secretKey)
      req.userVerifyEmail = decoded.email
      next()
    } else {
      return res.status(401).json({
        statusCode: 401,
        message: 'Unauthorized. Token is not in the expected format.',
      })
    }
  } else {
    return res.status(401).json({
      statusCode: 401,
      message: 'Unauthorized. Authorization header is missing.',
    })
  }
}
