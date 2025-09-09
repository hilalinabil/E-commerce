const express = require("express");
const { placeOrder, getMyOrders, updateOrderStatus } = require("../controllers/orderController");
const { protect } = require("../middleware/authMiddleware");
const { admin } = require("../middleware/adminMiddleware");

const router = express.Router();

router.route("/")
  .post(protect, placeOrder)
  .get(protect, getMyOrders);

router.put("/:id", protect, admin, updateOrderStatus);

module.exports = router;
