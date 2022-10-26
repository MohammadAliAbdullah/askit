var router = require("express").Router();
const auth = require('../controllers/AuthController');
// console.log(auth);
module.exports = (app) => {
    router.post('/signup', auth.signup);
    app.use('/api/auth', router);
}