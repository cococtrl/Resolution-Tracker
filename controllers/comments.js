const User = require('../models/user');

module.exports = {
    create,
    delNote
};

function delNote(req,res){
    const resolution = req.user.resolutions.id(req.params.id);
    resolution.comments.pop(req.body);
    req.user.save(function(err){
        res.redirect(`/resolutions/${req.params.id}`);
    });
}

function create(req, res){
    const resolution = req.user.resolutions.id(req.params.id);
        resolution.comments.push(req.body);
        req.user.save(function(err){
            res.redirect(`/resolutions/${req.params.id}`);
        });
}
