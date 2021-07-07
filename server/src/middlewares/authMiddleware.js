const { AuthService } = require('../services');
const { HttpError } = require('../exceptions');
const { HttpStatusCode } = require('../constants')

exports.requireAuthMiddleware = async (req, res, next) => {
    try {
        const accessToken = req.cookies["access_token"];
        const refreshToken = req.cookies["refresh_token"];

        console.log(refreshToken);
        console.log(accessToken);


        if (!accessToken || !refreshToken) throw new Error('Unauthorized');

        const {
            newAccessToken,
            newRefreshToken,
            user
        } = await AuthService.verifyTokens(refreshToken, refreshToken);

        if (!newAccessToken && !newRefreshToken) throw new Error('Unauthorized');

        res.cookie('access_token', newAccessToken, { httpOnly: true, sameSite: true });
        res.cookie('refresh_token', newRefreshToken, { httpOnly: true, sameSite: true });
        req.user = user;

        next();
    }
    catch (error) {
        throw new HttpError(
            HttpStatusCode.FORBIDDEN.status,
            HttpStatusCode.FORBIDDEN.code,
            error.message
        )
    }
}

