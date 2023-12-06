const router = require("express").Router();
const User = require("../models/User");
const { updateUser, deleteUser, allUsers } = require("../controllers/userController")

const { inventory, searchItem, FSN1, FSN2, toInventory, issuedItems, addItem, itemCost1, itemCost2, itemCost3, issuedDecreaser, deleteItem, toggleStock, categoryList } = require("../controllers/itemController");


router.get("/inventory",inventory);
router.get("/inventory/:category", categoryList)

router.post("/addItem",addItem);
router.delete("/deleteItem/:item_id", deleteItem);
router.put("/toggleStock/:itemId", toggleStock)


router.get("/users",allUsers);



module.exports=router;