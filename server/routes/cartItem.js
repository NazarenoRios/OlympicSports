const express = require("express");
const router = express.Router();

const { validateAuth } = require("../middleware/auth");

const { CreateCartItem, ModifyCartItem, DeleteCartItem, GetCartItem, GetCartItems } = require("../controllers/cartItemController");


router.post("/", CreateCartItem);

router.delete("/:id", DeleteCartItem);

router.put("/:id", ModifyCartItem);

router.get("/", validateAuth, GetCartItem)

router.get("/cartItems", validateAuth, GetCartItems)


module.exports = router;
