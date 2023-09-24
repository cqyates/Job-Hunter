// import user model
const { User } = require('../models');
// import sign token function from auth
const { signToken } = require('../utils/auth');

module.exports = {
  // get a single user by either their id or their username
  async getMe(req, res) {
    console.log(req.params)
    const user = await User.findByPk(req.params.id)

    if (!user) {
      return res.status(400).json({ message: 'Cannot find a user with this id!' });
    }

    res.json(user);
  },
  // create a user, sign a token, and send it back (to client/src/components/SignUpForm.js)
  async createUser({ body }, res) {
    const user = await User.create(body);

    if (!user) {
      return res.status(400).json({ message: 'Something is wrong!' });
    }
    const token = signToken(user);
    res.json({ token, user });
  },
  // login a user, sign a token, and send it back (to client/src/components/LoginForm.js)
  // {body} is destructured req.body
  async loginUser({ body }, res) {
    const userData = await User.findOne({ where: { email: body.email } });
    if (!userData) {
      return res.status(400).json({ message: "Can't find this user" });
    }

    const correctPw = await userData.checkPassword(body.password);

    if (!correctPw) {
      return res.status(400).json({ message: 'Wrong password!' });
    }
    const token = signToken(userData);
    res.json({ token, userData });
  },

  
 
};