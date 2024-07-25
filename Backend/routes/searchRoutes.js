
const express = require('express');
const { searchImages } = require('../controllers/searchController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', auth, searchImages);

module.exports = router;
