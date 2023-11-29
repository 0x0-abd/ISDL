const User=require("../models/User");
const bcrypt = require("bcrypt");//asynchronous function 
const jwt=require("jsonwebtoken");

// Getting all users: only Admin
exports.allUsers = async(req,res)=>{
		try {
            const user = await User.find({})
            res.status(200).json({users:user});
        }catch(err){
            res.send(err);
        }
}