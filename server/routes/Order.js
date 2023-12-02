const Order = require("../models/Order")
const { createOrder, allOrders, orderHistoryUser } = require("../controllers/orderController")

const router = require("express").Router();

router.post("/", createOrder);

router.get("/all", allOrders);

router.get("/:userId", orderHistoryUser);

module.exports=router;