const router = require("express").Router();
const User = require("../models/User");
const { updateUser, deleteUser, allUsers } = require("../controllers/userController")

const { inventory, searchItem, FSN1, FSN2, toInventory, issuedItems, addItem, itemCost1, itemCost2, itemCost3, issuedDecreaser, deleteItem } = require("../controllers/itemController");


router.get("/inventory",inventory);
router.post("/addItem",addItem);
router.delete("/deleteItem/:item_id", deleteItem);


router.get("/users",allUsers);



module.exports=router;