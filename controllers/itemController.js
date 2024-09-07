const User = require("../models/User");
const Item = require("../models/Item");
const cloudinary = require('../config/cloudinary');
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
        // Initialize variables for item creation
        let imageUrl = '';

        // Check if a file is uploaded
        if (req.file) {
            // Upload image to Cloudinary
            const uploadResult = await cloudinary.uploader.upload(req.file.path, {
                folder: "gfc-items",
                format: "png"
            });

            if (uploadResult) {
                // Get optimized URL
                imageUrl = cloudinary.url(uploadResult.public_id, {
                    transformation: [
                        {
                            quality: 'auto',
                            gravity: 'auto',
                            width: 500,
                            height: 500,
                            crop: 'fill'
                        }
                    ]
                });
            } else {
                return res.status(500).json({ status: 'Image upload failed' });
            }
        }

        // Create new item with or without image URL
        const newItem = new Item({
            _id: new mongoose.Types.ObjectId(),
            item_name: req.body.item_name,
            price: req.body.price,
            item_description: req.body.item_description,
            category: req.body.category,
            imageUrl,
        });

        const item = await newItem.save();
        return res.status(200).json({ status: 'Item Added Successfully', item: item });
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