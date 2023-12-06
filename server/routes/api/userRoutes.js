const router=require("express").Router();
const {createUser, loginUser, getAllUsers, createProfile, getMe, getAllProfiles} = require("../../controllers/user-controller.js")
//works, tested with insomnia
router.route("/").post(createUser).get(getAllUsers);
router.route("/login").post(loginUser);
router.route("/me").get(getMe)
router.route("/profile").post(createProfile).get(getAllProfiles);

module.exports=router