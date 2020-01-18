const User = require('../models/user');

module.exports = {
    index,
    new: newRes,
    addRes,
    delRes,
    show,
    edit,
    update
};

function update(req,res){
    const resolution = req.user.resolutions.id(req.params.id);
    console.log(req.body);
    resolution.set(req.body)
    req.user.save(function (err){
        res.redirect(`/resolutions/${req.params.id}`)
    });
}

function edit(req,res){
    const resolution = req.user.resolutions.id(req.params.id)
    console.log(resolution);
    res.render('resolutions/edit', {resolution, user: req.user});
}

function show(req,res){
        const resolution = req.user.resolutions.id(req.params.id);
        res.render('resolutions/show', {resolution, user: req.user});

}

function newRes(req,res){
    res.render('resolutions/new', {user: req.user})
}

function index(req,res){
    User.find({}, function(err, users){
        res.render('resolutions/index',{
            users,
            loggedInUser: req.user });
    });
}

function addRes(req,res){
    req.user.resolutions.push(req.body);
    req.user.save(function(err){
        res.redirect('/resolutions')
    });
}

function delRes(req,res){
        req.user.resolutions.pull(req.params.id);
        req.user.save(function(err){
            res.redirect('/resolutions')
        });
}