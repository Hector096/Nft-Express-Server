const express = require('express');

const router = express.Router();
const controller = require('../controller/controller');

// Get Landing Page
router.get('/', controller.find);

router.get('/nft', controller.find);

router.post('/nft', controller.create);

router.put('/nft/:id', controller.update);
router.delete('/nft/:id', controller.delete);

module.exports = router;
