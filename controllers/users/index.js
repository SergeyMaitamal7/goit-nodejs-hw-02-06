const { register } = require('./register');
const { login } = require('./login');
const { logout } = require('./logout');
const { createToken } = require('./token');
const { getCurrent } = require('./getCurrent');
const { updateAvatar } = require('./updateAvatar');
const { verifyEmail } = require('./verifyEmail');
const { resendVerifyEmail } = require('./resenVerifyEmail');
module.exports = {
  register,
  login,
  logout,
  createToken,
  getCurrent,
  updateAvatar,
  verifyEmail,
  resendVerifyEmail,
};
