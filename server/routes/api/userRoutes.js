const router=require("express").Router();
const {createUser, loginUser} = require("../../controllers/user-controller.js")
//works, tested with insomnia
router.route("/").post(createUser);
router.route("/login").post(loginUser)

module.exports=router