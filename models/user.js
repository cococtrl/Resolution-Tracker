const mongoose = require('mongoose');

const resolutionSchema = new mongoose.Schema({
    text: String
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