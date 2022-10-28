const db = require('../models');
const password = require('../services/PasswordService');
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
        password:  password.hashPassword(req.body.password),// bcrypt.hashSync(req.body.password, 8),
        activeStatus: req.body.activeStatus,
        createdBy: req.body.createdBy, 
    });
    // console.log(user);
    // insert data
    user.save(user)
        .then((data) => { res.send(data); })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the User."
            });
        });
}

exports.signin = (req, res) => {
    console.log(res);
}