const Cart = require("../models/Cart");
const { createCart, updateCart, deleteCart, getUserCart, getAllCarts } = require("../controllers/cartController")

const router = require("express").Router();

// Create
router.post("/", createCart);

// Update
router.put("/:id", updateCart);

//DELETE
router.delete("/:id", deleteCart);

//GET USER CART
router.get("/find/:userId", getUserCart);

//GET ALL
router.get("/", getAllCarts);