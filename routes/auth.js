const router=require("express").Router();
const User=require("../models/User.js");
const bcrypt = require("bcrypt");

const {registerUser,login, getUser} =require("../controllers/authController.js");

//1.Register
router.post("/register",registerUser);

//2.Login Route
router.post("/login",login);

router.get("/getUser", getUser);

router.post("/signout", signOut);





module.exports=router;