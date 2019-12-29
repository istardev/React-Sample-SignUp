const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    name: String,
    email: String,
    phonenumber: String,
    address: String,
    zipcode: String
});

module.exports = mongoose.model('users', userSchema);

