const router = require('express').Router();
const userCtrl = require('../controllers/users');

router.get('/users', userCtrl.index);
router.post('/resolutions', userCtrl.addRes);
router.delete('/resolutions/:id', isLoggedIn, userCtrl.delRes);

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router;