// src/routes/stockRoutes.js
const express = require('express');
const { getAllStock, createStockItem } = require('../controllers/stockController');
const router = express.Router();

router.get('/', getAllStock);
router.post('/', createStockItem);

module.exports = router;
