var router = require("express").Router();
const auth = require('../controllers/AuthController');
// console.log(auth);
module.exports = (app) => {
    router.post('/signup', auth.signup);
    router.post('/signin', auth.signin);
    app.use('/api/auth', router);
}