const bcrypt = require('bcrypt');
const { User } = require('../../models/user');
const { ctrlWrapper, HttpError } = require('../../helpers');
const { createToken } = require('./token');

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

console.log(user)

  if (!user) {
    throw HttpError(401, 'Email or password is wrong');
  }
  if (!user.verify) {
    throw HttpError(404, 'Emeil not verify');
  }
  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw HttpError(401, 'Email or password is wrong');
  }
  const payload = {
    id: user._id,
  };
  const token = createToken(payload);
  await User.findByIdAndUpdate(user._id, { token });
  res.json({
    token: token,
    user: {
      email: email,
      subscription: 'starter',
    },
  });
};

module.exports = { login: ctrlWrapper(login) };
