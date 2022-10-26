const db = require('../models');
const User = db.user;
const Role = db.role;
// console.log(db);

// jwt token
const jwt = require('jsonwebtoken');
// bcryptjs
const bcrypt = require('bcryptjs');

exports.signup = (req, res) => {
    const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        activeStatus: req.body.activeStatus, 
        createdBy: req.body.createdBy, 
    });
    console.log(user);
    /* 
        {
        firstname: 'firstname',
        lastname: 'lastname',
        username: 'username',
        email: 'email',
        password: '$2a$08$QVdmhHxBDis4lfihvRFByOwOsJMWptYaOlSIThxaWqyzcZ75PA1ce',
        roles: [],
        _id: new ObjectId("635970988dda2e210fbadf59")
        }
    */
    // user.save(user);
}

exports.signin = (req, res) => {
    console.log(res);
}