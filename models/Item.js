const mongoose=require('mongoose');

const ItemSchema =new mongoose.Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId
    },
    item_name:{
        type: String,
        required: true,
    },
    price:{
        type:Number,
        default:0,
       
    },
    item_description:{
        type:String,
        default:"",
       
    },
    in_stock:{
        type: Boolean,
        default: true,
    },
    category:{
        type: String,
        default: ""
    },
    imageUrl: {
        type: String,
    }
},
{
    timestamps: true
}

);

module.exports=mongoose.model("Item",ItemSchema);