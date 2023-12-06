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
            category: req.body.category
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

exports.toggleStock = async (req, res) => {
    const item_id = req.params.itemId;
    console.log(item_id, req.body);
    const {negation} = req.body;
    try {
        const item = await Item.findByIdAndUpdate(
            item_id,
            {
                in_stock: negation,
            },
            { new: true }
        );
        res.status(200).json({ status: 'Item Updated Successfully', item: item });
    }catch(err) {
        res.status(500).json({ status: 'Item not found', item: false, error: err });
    }
}

exports.categoryList = async (req, res) => {
    try{
        console.log(req.params.category)
        const items = await Item.find({"category":req.params.category});
        res.json({ items });
    }catch(err){
        res.send(err);
    }
}