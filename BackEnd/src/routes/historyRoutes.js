const express = require('express');
const router = express.Router();
const { getHistories, addHistory } = require('../controllers/historyController');

router.get('/', getHistories);
router.post('/', addHistory);

module.exports = router;
