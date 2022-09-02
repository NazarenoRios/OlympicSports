const express = require("express");
const router = express.Router();

const { validateAuth } = require("../middleware/auth");

const { cartUserUpdate, cartUserGet } = require("../controllers/cartUserController");

router.put("/", validateAuth , cartUserUpdate);

router.get("/getCart", validateAuth, cartUserGet)

module.exports = router;
