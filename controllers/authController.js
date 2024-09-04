const User=require("../models/User");
const bcrypt = require("bcrypt");//asynchronous function 
const jwt=require("jsonwebtoken")
const mongoose = require("mongoose")

const handleErrors=(err)=>{
    //message propery contain inf about all errors
    console.log(err.message,err.code)
    let errors={username:'', password:''};

    //incorrect email address
    if(err.message==='incorrect username'){
        errors.email='that username is not registered'
    }
    //incorrect password
    if(err.message === 'Incorrect Password'){
        errors.password='that password is not correct'
    }

    //duplicate erro code 
    if(err.code === 11000){
        errors.email = 'that username is already registered';
        return errors;
    }
    // console.log(errors);
    //validation errors
    if(err.message.includes('user validation failed')){
        Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path] = properties.message;
        });
    }
    return errors;

}

//jwt expects a time in second while cookie expects a time in milliseconds
const maxAge = 60 * 60 * 1000;

const createToken=(id)=>{
    return jwt.sign({id},'net ninja secret',{//return a token with a signature. the header automatically get applied  
        expiresIn:maxAge
    });
}

exports.registerUser = async (req,res)=>{
    
    try{
        //generate new password
        console.log(req);
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(req.body.password,salt);
        //create new user
        console.log(req.body.email);
        const newUser= await new User({
            _id: new mongoose.Types.ObjectId(),
            // username:req.body.username,
            email:req.body.email,
            password:req.body.hashedPassword,
            name:req.body.name
        })
        //save user and respond
        const user=await newUser.save();
        const token=createToken(user._id);
        //httpOnly: can't access and change in frontend js
        res.cookie('jwt',token,{
            httpOnly:true,
            secure:true,
            sameSite:"none",
            expires: new Date(Date.now()+maxAge),
        });
        const userWithoutPassword = user.toObject();
        delete userWithoutPassword.password;
        res.status(200).json({status: 'ok',user:userWithoutPassword});
    }catch(err){
        console.log(err);
        const errors= handleErrors(err);
        res.status(400).json({errors});
    }
}

exports.login=async (req,res)=>{
    const {email,password} = req.body;//destructring
    try {
        const user=await User.login(email,password);
        const token=createToken(user._id);
        //httpOnly: can't access and change in frontend js
        res.cookie('jwt',token,{
            httpOnly:true,
            secure:true,
            sameSite:"none",
            expires: new Date(Date.now()+maxAge),
        });
        const userWithoutPassword = user.toObject();
        delete userWithoutPassword.password;

        res.status(200).json({user:userWithoutPassword});
    } catch (err) {
        const errors= handleErrors(err);
        console.log(errors,);
        res.status(400).json({errors});
    }
}

exports.getUser = async (req, res) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ success: false, message: "No token provided" });
        }

        const decoded = jwt.verify(token, jwtSecret);
        const user = await User.findById(decoded.id).select('-password'); // Exclude password

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        return res.status(200).json({ success: true, user });
    } catch (e) {
        console.error(e);
        return res.status(400).json({ success: false, message: e.message });
    }
};

exports.signOut = async (req, res) => {
    res.clearCookie('jwt', {
        path: "/",
        secure: true,
        httpOnly: true,
        sameSite: "none"
    });
    return res.status(200).json({
        success: true,
        message: "Signed out successfully"
    });
};