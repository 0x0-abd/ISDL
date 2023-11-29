const User = require("../models/User");
const Item = require("../models/Item");
const mongoose = require("mongoose")

exports.inventory = async (req, res) => {
    try{
        const items = await Item.find({});
        res.json({ items });
    }catch(err){
        res.send(err);
    }
}

exports.addItem = async (req, res) => {
    try {
        const newItem = await new Item({
            _id: new mongoose.Types.ObjectId(),
            item_name: req.body.item_name,
            price: req.body.price,
            item_description: req.body.item_description,
        })
        const item = await newItem.save();
        res.status(200).json({ status: 'Item Added Successfully', item: item });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: 'Item Not Added Successfully', item: false, error: err });
    }

}

exports.deleteItem = async (req, res) => {
    const item_id = req.params.item_id;
    try {
        const item = await Item.deleteOne({_id: item_id});
        res.status(200).json({ status: 'Item Deleted Successfully', item: item });
    }catch(err) {
        res.status(500).json({ status: 'Item not found', item: false, error: err });
    }
}