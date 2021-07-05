
const router = require("express").Router();
const authRouter = require('./AuthRouter');

router.use('/api/v1/auth', authRouter);

module.exports = router;