const express = require('express');
const controllers = require('controllers');

const router = express.Router();

router.post('/', controllers.message.postMessage);

module.exports = router;