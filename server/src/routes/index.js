
const router = require("express").Router();
const authRouter = require('./AuthRouter');
const taskRouter = require('./TaskRouter');

router.use('/api/v1/auth', authRouter);
router.use('/api/v1/task', taskRouter);

module.exports = router;