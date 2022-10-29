const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const config = require('../config/TokenConfig');

const sign = (playload, secretToken, options) => {
    try {
        const token = jwt.sign(playload, secretToken, options);
        return token;
    } catch (err) {
        throw new Error(err.message);
    }
};

exports.createAccessToken = (user) => {
    try {
        const payload = {
            id: user._id
        };

        const options = {
            algorithm: "HS512",
            subject: user.id.toString(),
            expiresIn: config.expireAccess
        };
        const token = sign(payload, config.secretAccess, options);

        return token;
    } catch (err) {
        throw new Error(err.message);
    }
}
exports.createRefreshToken = (user) => {
    try {
        const payload = {
            id: user._id
        };

        const options = {
            algorithm: "HS512",
            subject: user._id.toString(),
            expiresIn: config.expireRefresh
        };

        const token = sign(payload, config.secretRefresh, options);
        return token;
    } catch (err) {
        throw new Error(err.message);
    }
}
// not complete
exports.addRefreshTokenUser = (user, token) => {
    try {
        if (user.refreshTokens.length >= config.countTokenLimit) {
            user.refreshTokens = [];
        }

        const objectId = mongoose.Types.ObjectId();
        user.refreshTokens.push({ _id: objectId, token });
        user.save();

        return `${objectId}::${token}`;
    } catch (err) {
        throw new Error(err.message);
    }
}