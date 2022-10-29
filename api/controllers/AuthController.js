const db = require('../models');
const password = require('../services/PasswordService');
const mail = require('../services/MailService');
const validEmail = require('../utils/MailValidation');
const TokenService = require('../services/TokenService');
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
    const isEmail = validEmail.isEmailValid(req.body.username);
    const find = isEmail ? { email: req.body.username } : { username: req.body.username };
    User.findOne(find)
        .populate("roles", "-__v")
        .exec((err, user) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            if (!user) {
                return res.status(404).send({ message: "User Not found." });
            }

            try {
                // match password 
                const valid = password.checkPassword(req.body.password, user.password);
                if (!valid) {
                    return res.status(401).send({
                        accessToken: null,
                        message: "Invalid Password!"
                    });
                }
                const accessToken = TokenService.createAccessToken(user);
                const refreshTokenHash = TokenService.createRefreshToken(user);
                // const refreshToken = TokenService.addRefreshTokenUser(user, refreshTokenHash);
                res.send(user);
            } catch (err) {
                res.status(401).send({
                    message: err.message || "Some error occurred while creating the User."
                });
            }
        });

}