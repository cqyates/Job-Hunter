const router=require("express").Router();
const {createUser, loginUser, getMe, getAllUsers} = require("../../controllers/user-controller.js")
//works, tested with insomnia
router.route("/").post(createUser).get(getAllUsers);
router.route("/login").post(loginUser);
router.route("/me").get(getMe)

module.exports=router