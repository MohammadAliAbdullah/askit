const db = require('../models');
const password = require('../services/PasswordService');
const mail = require('../services/MailService');
const User = db.user;
const Role = db.role;
// jwt token
const jwt = require('jsonwebtoken');

exports.signup = (req, res) => {
    const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        email: req.body.email,
        password: password.hashPassword(req.body.password),
        activeStatus: req.body.activeStatus,
        createdBy: req.body.createdBy,
    });
    // insert data
    user.save(user)
        .then((data) => {
            if (data) {
                // data insert after send mail user email
                const send = mail.mailSend(data.email);
                res.send(data);
            } else {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the User."
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the User."
            });
        });
}

exports.signin = (req, res) => {
    console.log(res);
}