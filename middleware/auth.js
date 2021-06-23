const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(request, response, next) {
  // get the token from the header
  const token = request.header('x-auth-token');

  // check if not token

  if (!token) {
    return response.status(401).json({message: 'No token, authorization denied'});
  }

  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    request.user = decoded.user;
    next();

  } catch (error) {
    response.status(401).json({message: 'Token is not valid'});

  };
};