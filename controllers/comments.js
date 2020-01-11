const User = require('../models/user');

module.exports = {
    create
};

function create(req, res){
    req.user.resolutions.pull(req.params.id);
    req.user.save(function(err){
        res.redirect(`/resolutions/${req.params.id}`)
    });
}