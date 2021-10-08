const express = require('express');
const urlController = require('../controllers/urlController')
const router = express.Router();

//url shortening
router.post('/api/shorteningURL',urlController.postLongURL)
router.get('/:code',urlController.shorteningURL)

module.exports = router;