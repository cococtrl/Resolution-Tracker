const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content: String,
},
{
    timestamps: true
});

const resolutionSchema = new mongoose.Schema({
    text: String,
    comments: [commentSchema]
}, {
    timestamps: true
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatarURL: String,
    resolutions: [resolutionSchema],
    googleId: String
},{
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);