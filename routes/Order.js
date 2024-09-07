const Order = require("../models/Order")
const { createOrder, allOrders, orderHistoryUser, toggleOrder, updateOrder } = require("../controllers/orderController")

const router = require("express").Router();

router.post("/", createOrder);

router.get("/all", allOrders);

router.get("/:userId", orderHistoryUser);

router.post("/confirm/:orderId", toggleOrder);

router.post("order/:orderId/:status", updateOrder)

module.exports=router;