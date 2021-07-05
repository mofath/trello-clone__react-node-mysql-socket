const JWT = require('jsonwebtoken');
const config = require('../config/config');

var defaultPayload = {
    iss: "mofath",
    aud: "todos",
    iat: Math.floor(Date.now() / 1000) - 30,
};

var decodeToken = (token, secret) => {
    const decodedToken = JWT.verify(token, secret);

    if (decodedToken) {
        return {
            id: decodedToken.sub,
            role: decodedToken?.role || undefined
        }
    }

    return null;
}

module.exports = {
    generateAccessToken: (userId, role) => {
        // payload == claims
        const payload = {
            ...defaultPayload,
            sub: userId,
            role: role,
        }

        const expiry = { expiresIn: '1m' }

        return JWT.sign(payload, config.JWT_ACCESS_SECRET, expiry);
    },


    generateRefreshToken: (userId) => {
        const payload = {
            ...defaultPayload,
            sub: userId,
        }
        
        const expiry = { expiresIn: '48h' }

        return JWT.sign(payload, config.JWT_REFRESH_SECRET, expiry);
    },


    verifyAccessToken: (token) => decodeToken(token, config.JWT_ACCESS_SECRET),

    verifyRefreshToken: (token) => decodeToken(token, config.JWT_REFRESH_SECRET),
};

