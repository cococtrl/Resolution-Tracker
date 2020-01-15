const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');

router.post('/resolutions/:id', commentsCtrl.create);

module.exports = router;