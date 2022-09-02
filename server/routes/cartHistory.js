const express = require("express");
const cartHistory = express.Router();

const { validateAuth } = require("../middleware/auth");

const { getAllCartHistory, createCartHistory } = require("../controllers/cartHistoryController");


cartHistory.get("/",validateAuth, getAllCartHistory);
cartHistory.post("/agregarAHistorial",validateAuth, createCartHistory);
module.exports = cartHistory;
