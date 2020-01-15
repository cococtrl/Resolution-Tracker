const User = require('../models/user');

module.exports = {
    create
};

function create(req, res){
    // req.user.resolutions.push(req.body);
    // req.user.save(function(err){
    //     res.redirect(`/resolutions/${req.params.id}`)
    // });
    // console.log(req.body)
        const resolution = req.user.resolutions.id(req.params.id);
        resolution.comments.push(req.body);
        req.user.save(function(err){
            res.redirect(`/resolutions/${req.params.id}`);
        });
}