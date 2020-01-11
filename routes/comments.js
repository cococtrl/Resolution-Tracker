const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');

router.post('/resolutions/:id/reviews', commentsCtrl.create);

module.exports = router;