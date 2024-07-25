
const express = require('express');
const { createImage, getImages, uploadImage } = require('../controllers/imageController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', auth, uploadImage, createImage);
router.get('/', auth, getImages);

module.exports = router;
