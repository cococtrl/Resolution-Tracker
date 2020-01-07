const User = require('../models/user');

module.exports = {
    index,
    addRes,
    delRes
};

function index(req,res){
    User.find({}, function(err, user){
        res.render('resolutions/index',{
            users,
            user: req.user });
    });
}

function addRes(req,res){
    req.user.resolutions.push(req.body);
    req.user.save(function(err){
        res.redirect('/resolutions')
    });
}

function delRes(req,res){

}