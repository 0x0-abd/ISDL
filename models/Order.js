const mongoose=require('mongoose');

const OrderSchema =new mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        
    },
    user_name:{
        type: String,
    },
    products:[{
        _id: String,
        item_name: String,
        itemQuantity: Number,
        price: Number
    }],
    quantity:{
        type: Number,
        default: 0,
    },
    total:{
        type: Number,
        default: 0,
    },
    remark:{
        type: String,
        default: ""
    },
    order_date:{
        type: Date,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    status: {
        type: String,
        default: "pending",
    }
},
{
    timestamps: true
}

);

module.exports=mongoose.model("Order",OrderSchema);