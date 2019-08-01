const UserModel = require('../../infraestructure/schemas/User');

const SignIn = async ({ email, password }) => {
  let userAuthenticated = null;
  const verifyUser = function(err, user) {
    if (user && user.validPassword(password)) {
      userAuthenticated = user;
    } else {
      userAuthenticated = null;
    }
  };
  await UserModel.findOne({ email }, verifyUser);
  return userAuthenticated;
};

module.exports = {
  SignIn
};
