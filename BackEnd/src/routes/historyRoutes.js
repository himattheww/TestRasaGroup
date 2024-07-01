// src/routes/historyRoutes.js
const express = require('express');
const { getAllHistory, createHistoryItem } = require('../controllers/historyController');
const router = express.Router();

router.get('/', getAllHistory);
router.post('/', createHistoryItem);

module.exports = router;
