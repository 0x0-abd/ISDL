const router = require("express").Router();
const User = require("../models/User");
const upload = require("../middleware/multer")


const { updateUser, deleteUser, allUsers } = require("../controllers/userController")

const { inventory, addItem, deleteItem, toggleStock, categoryList, updateItem } = require("../controllers/itemController");


router.get("/inventory",inventory);
router.get("/inventory/:category", categoryList)

router.post("/addItem", upload.single('file'), addItem);
router.patch("/updateItem/:itemId", upload.single('file'), updateItem);

router.delete("/deleteItem/:itemId", deleteItem);
router.put("/toggleStock/:itemId", toggleStock)


router.get("/users",allUsers);



module.exports=router;