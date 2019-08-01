const config = require('../config');
module.exports = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', config.clientURL);
  res.header('Access-Control-Allow-Credentials', true);
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
};
