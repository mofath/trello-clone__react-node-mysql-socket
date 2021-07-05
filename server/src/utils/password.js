const bcrypt = require('bcrypt');

var SALT_ROUNDS = 10;

module.exports = {
    hash: (password) => bcrypt.hash(password, SALT_ROUNDS),
    compare: (password, hash) => bcrypt.compare(password, hash),
};
