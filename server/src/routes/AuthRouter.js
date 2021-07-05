
const router = require('express').Router();;
const AuthController = require('../controllers/AuthController');
const AuthMiddleware = require('../middlewares/authMiddleware');

router.post('/signup', AuthController.create);
router.post('/login', AuthController.login);
router.get('/token', AuthMiddleware.verifyTokens);

module.exports = router;