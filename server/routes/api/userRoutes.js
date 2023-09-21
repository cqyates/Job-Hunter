const router=require("express").Router();
const {createUser} = require("../../controllers/user-controller.js")
//works, tested with insomnia
router.route("/").post(createUser);

module.exports=router