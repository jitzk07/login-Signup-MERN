
const express = require('express');
const { createFolder, getFolders } = require('../controllers/folderController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', auth, createFolder);
router.get('/', auth, getFolders);

module.exports = router;
