const User = require('../models/user');

module.exports = {
    index,
    addRes,
    delRes
};

function index(req,res){
    User.find({}, function(err, users){
        res.render('users/index',{
            users,
            user: req.user });
    });
}

function addRes(req,res){
    req.user.resolutions.push(req.body);
    req.user.save(function(err){
        res.redirect('/users')
    });
}

function delRes(req,res){

}