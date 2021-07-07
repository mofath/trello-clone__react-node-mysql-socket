const { AuthService } = require('../services');
const jwtUtils = require('../utils/jwt');
const { HttpError } = require('../exceptions')
const { HttpStatusCode } = require('../constants')


async function create(req, res, next) {
    try {
        const user = await AuthService.create(req.body);

        res.status(201).json({
            success: true,
            user
        });

    } catch (error) {
        next(new Error(error.message));
    }
}

async function login(req, res, next) {
    try {
        const user = await AuthService.login(req.body);

        const accessToken = jwtUtils.generateAccessToken(user.id, user.role);
        const refreshToken = jwtUtils.generateRefreshToken(user.id);

        res.cookie('access_token', accessToken, {
            httpOnly: true, sameSite: true
        });
        res.cookie('refresh_token', refreshToken, {
            httpOnly: true, sameSite: true
        });

        return res.status(200).json({
            message: `Welcome, ${user.username}`,
            isAuthenticated: true,
            userInfo: user
        });

    } catch (error) {
        next(new Error(error.message));
    }
};

async function authenticate(req, res, next) {
    try {
        const accessToken = req.cookies["access_token"];
        const refreshToken = req.cookies["refresh_token"];

        if (!refreshToken && !accessToken) throw new Error('Unauthorized');

        const {
            newAccessToken,
            newRefreshToken,
            user
        } = await AuthService.verifyTokens(refreshToken, refreshToken);

        if (!newAccessToken && !newRefreshToken) throw new Error('Unauthorized');

        res.cookie('access_token', newAccessToken, { httpOnly: true, sameSite: true });
        res.cookie('refresh_token', newRefreshToken, { httpOnly: true, sameSite: true });

        return res.status(200).json({
            success: true,
            user
        })
    }
    catch (error) {
        console.log(error.stack);
        next(new HttpError(
            HttpStatusCode.FORBIDDEN.status,
            HttpStatusCode.FORBIDDEN.code,
            error.message
        ))
    }
};


module.exports = {
    create,
    login,
    authenticate,
};