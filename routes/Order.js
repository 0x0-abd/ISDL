const Order = require("../models/Order")
const { createOrder, allOrders, orderHistoryUser, toggleOrder } = require("../controllers/orderController")

const router = require("express").Router();

router.post("/", createOrder);

router.get("/all", allOrders);

router.get("/:userId", orderHistoryUser);

router.post("/confirm/:orderId", toggleOrder);

module.exports=router;