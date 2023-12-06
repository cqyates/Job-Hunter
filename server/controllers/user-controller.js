// import user model
const { User, Project, UserProfile} = require('../models');
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
    const users = await User.findAll({include: [Project, UserProfile]})
    res.json(users)
  },
  // create a user, sign a token, and send it back (to client/src/components/SignUpForm.js)
  // Insomnia tested. token makes it to response
  async createUser(req, res) {
    const user = await User.create(req.body);

    if (!user) {
      return res.status(400).json({ message: 'Something is wrong!' });
    }
    const token = signToken(user);
    req.session.save(()=>{
      req.session.userId = user.id
      req.session.loggedIn = true;
      res.json({ token, user });
    })
  },
  // tested with insomnia
  async loginUser(req, res) {
    const user= await User.findOne({ where: { email: req.body.email } });
    if (!user) {
      return res.status(400).json({ message: "Can't find this user" });
    }

    const correctPw = user.checkPassword(req.body.password);

    if (!correctPw) {
      return res.status(400).json({ message: 'Wrong password!' });
    }
    const token = signToken(user);
    req.session.save(()=>{
      req.session.userId = user.id;
      req.session.loggedIn = true;
      res.json({ token, user });
    })
  },
  async createProfile(req, res) {
    const newProfile = {
      first_name: req.body.first_name, 
      last_name: req.body.last_name, 
      contact_email: req.body.contact_email, 
      github_username: req.body.github_username,
      profile_image: req.body.profile_image,
      profile_url: req.body.profile_url,
      home_phone: req.body.home_phone,
      cell_phone: req.body.cell_phone,
      github_url: req.body.github_url,
      linkedin_url: req.body.linkedin_url,
      facebook_url: req.body.facebook_url,
      indeed_url: req.body.indeed_url,
      monster_url: req.body.monster_url,
      dice_url: req.body.dice_url,
      zipRecruiter_url: req.body.zipRecruiter_url,
      userId: req.body.userId
    }
    try {
      const profileData = await UserProfile.create(newProfile);
      console.log(profileData)
      res.status(200).json(profileData)
    } catch (error) {
      res.status(500).json(error)
    }
  },
  async getAllProfiles(req, res) {
    try {
      const profiles = await UserProfile.findAll({})
      res.json(profiles)
    } catch (error) {
      res.json(error)
    }
  }
 
};