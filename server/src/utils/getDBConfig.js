const config = require('../config/database.json');

module.exports = () => {
    const env = process.env.NODE_ENV || 'development';
    return config[env];
};
