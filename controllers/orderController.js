const Order= require("../models/Order")
const mongoose = require("mongoose")

// find all orders for admin
exports.allOrders= async function(req,res){
    try{
        const orders = await Order.find({});
        res.status(200).json({orders:orders});
    }catch(err) {
        res.send(err);
    }
}

// order history for user 
exports.orderHistoryUser= async function(req,res){
    try{
        const orders = await Order.find({user_id:req.params.userId});
        res.status(200).json({orders:orders});
    }catch(err) {
        res.send(err);
    }
}

// order items
exports.orderItem =async (req,res)=>{
    try{
        const newOrder = await new Order({
            _id:new mongoose.Types.ObjectId(),
            user_id:req.body.user_id,
            item_count:req.body.item_count,
            remark:req.body.remark,
            order_date:Date.now(),
            total_cost:req.body.total_cost,
            purchased_items:req.body.purchased_items,
        });
        const order=await newOrder.save();
        console.log(order);
        res.status(201).json({status: 'Succesfully added a new Order',Order:order});
    }catch(err){
        console.log(err);
        res.status(500).json({status: 'Order Not Added Successfully',order:false,error:err});
    }
}

// get recent order
exports.recentOrder =async (req,res)=>{
    try{
        const user_id=req.params.userId
        const result= await Order.find().sort({'order_date':-1}).limit(1);
        if(result){
            res.status(200).json({order:result[0]});
        }else{
            res.status(200).json({err:"you have not ordered anything"});
        }
    }catch(err){
        res.status(404).json({error:err})
    }
   
}

exports.createOrder = async (req, res) =>{
    
    try{
        //create new order
        const newOrder= await new Order(req.body)
        //save order and respond
        const order=await newOrder.save();
        res.status(200).json({status: 'ok',order:order});
    }catch(err){
        console.log(err);
        const errors= err;
        res.status(400).json({errors});
    }
}

exports.toggleOrder = async (req, res) => {
    const item_id = req.params.orderId;
    console.log(item_id, req.body);
    const {negation} = req.body;
    try {
        const order = await Order.findByIdAndUpdate(
            item_id,
            {
                isVerified: negation,
            },
            { new: true }
        );
        res.status(200).json({ status: 'Order Updated Successfully', order: order });
    }catch(err) {
        res.status(500).json({ status: 'Order not found', order: false, error: err });
    }
}

exports.updateOrder = async (req, res) => {
    const item_id = req.params.orderId;
    const status = req.params.status;

    try {
        const order = await Order.findByIdAndUpdate(
            item_id,
            {
                status,
            },
            { new: true }
        );
        res.status(200).json({ status: 'Order Updated Successfully', order: order });
    }catch(err) {
        res.status(500).json({ status: 'Order not found', order: false, error: err });
    }
}