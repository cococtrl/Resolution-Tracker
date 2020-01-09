const router = require('express').Router();
const resCtrl = require('../controllers/resolutions');

router.get('/resolutions', isLoggedIn,resCtrl.index);
router.get('/resolutions/new', isLoggedIn, resCtrl.new);
router.get('/resolutions/:id', isLoggedIn, resCtrl.show);
router.get('/resolutions/:id/edit', resCtrl.edit);
router.post('/resolutions', isLoggedIn, resCtrl.addRes);
router.delete('/resolutions/:id', isLoggedIn, resCtrl.delRes);
router.put('/resolutions/:id', isLoggedIn, resCtrl.update);

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router;