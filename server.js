const express=require("express");
const mongoose=require('mongoose');
const dotenv=require("dotenv");
const cors=require("cors");
const connectDB = require("./config/db");
const authRoutes=require('./routes/auth.js'); 
const userRoutes=require("./routes/User.js");
const adminRoutes=require("./routes/Admin.js");
const orderRoutes=require("./routes/Order.js")
const mediaRoutes=require("./routes/Media.js")
const cookieParser = require('cookie-parser');

dotenv.config();
const app=express();
app.use(cookieParser())

connectDB();

const corsConfig = {
    origin: ['http://localhost:5173', 'https://isdl-front-end.vercel.app', 'https://grocery-store-kohl.vercel.app'],
    credentials: true,
};
app.use(cors(corsConfig));
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//  });
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/user",userRoutes);
app.use("/admin",adminRoutes);
app.use("/order",orderRoutes);
app.use("/media",mediaRoutes);


app.get("/",(req,res)=>{
    res.send("welcome to home page")
})

app.listen(process.env.PORT || 8080,()=>{
    console.log("Server started on port 8080");
})