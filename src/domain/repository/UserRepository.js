const UserModel = require('../../infraestructure/schemas/User');

const User = user => {
  let userModel = new UserModel(user);
  userModel.setPassword(user.password);
  return userModel.save();
};

module.exports = {
  User
};
