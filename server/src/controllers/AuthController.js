const { AuthService } = require('../services');
const jwtUtils = require('../utils/jwt');


async function create(req, res, next) {
    try {
        const user = await AuthService.create(req.body);

        res.status(201).json({
            success: true,
            user
        });

    } catch (err) {
        next(new Error);
    }
}

async function login(req, res, next) {
    try {
        const user = await AuthService.login(req.body);

        const accessToken = jwtUtils.generateAccessToken(user.id, user.role);
        const refreshToken = jwtUtils.generateRefreshToken(user.id);

        res.cookie('access_token', accessToken, { httpOnly: true, sameSite: true });
        res.cookie('refresh_token', refreshToken, { httpOnly: true, sameSite: true });

        return res.status(200).json({
            message: `Welcome, ${user.username}`,
            isAuthenticated: true,
            userInfo: user
        });

    } catch (error) {
        next(new Error);
    }
};


module.exports = {
    create,
    login,
};