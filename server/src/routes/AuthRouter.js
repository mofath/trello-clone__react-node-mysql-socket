
const router = require('express').Router();;
const AuthController = require('../controllers/AuthController');

router.post('/signup', AuthController.create);
router.post('/login', AuthController.login);
router.get('/', AuthController.authenticate);

module.exports = router;