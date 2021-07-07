const { create } = require('./auth.create');
const { login } = require('./auth.login');
const { verifyTokens } = require('./auth.verifyTokens');

module.exports = {
    create,
    login,
    verifyTokens
};
