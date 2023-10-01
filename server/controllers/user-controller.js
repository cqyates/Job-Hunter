// import user model
const { User, Project, Profile} = require('../models');
// import sign token function from auth
const { signToken } = require('../utils/auth');

module.exports = {
  // get a single user by their id
  async getMe(req, res) {

    const user = await User.findByPk(req.body.userId, {include: [Project]})

    if (!user) {
      return res.status(400).json({ message: 'Cannot find a user with this id!' });
    }

    res.json(user);
  },
  async getAllUsers(req, res) {
    const users = await User.findAll({include: [Project, Profile]})
    res.json(users)
  },
  // create a user, sign a token, and send it back (to client/src/components/SignUpForm.js)
  // Insomnia tested. token makes it to response
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
  // tested with insomnia
  async loginUser({ body }, res) {
    const userData = await User.findOne({ where: { email: body.email } });
    if (!userData) {
      return res.status(400).json({ message: "Can't find this user" });
    }

    const correctPw = userData.checkPassword(body.password);

    if (!correctPw) {
      return res.status(400).json({ message: 'Wrong password!' });
    }
    const token = signToken(userData);
    res.json({ token, userData });
  },
  async createProfile({body}, res) {
    try {
      const profileData = await Profile.create(body)
      res.status(200).json(profileData)
    } catch (error) {
      res.status(500).json(error)
    }
  }
  
 
};