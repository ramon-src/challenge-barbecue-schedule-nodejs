const jwt = require('jsonwebtoken');
const { secret } = require('../config');

const expireIn = months => {
  const today = new Date();
  const expiration = new Date(today);
  expiration.setDate(today.getDate() + months * 30);
  return parseInt(expiration.getTime() / 1000);
};

// const Auth = require('../../app/service/Auth')
// userSchema.methods.generateJWT = function () {
//     return Auth.sign({
//         id: this._id,
//         username: this.username
//     });
// };

// userSchema.methods.toAuthJSON = function () {
//     return {
//         username: this.username,
//         email: this.email,
//         token: this.generateJWT()
//     };
// };
module.exports = {
  signIn: ({ id, username }) => {
    return jwt.sign(
      {
        id,
        username,
        expiration: expireIn(2)
      },
      secret
    );
  }
};
