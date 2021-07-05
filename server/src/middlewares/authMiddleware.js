const jwtUtils = require('../utils/jwt');
const { AuthService } = require('../services')

exports.verifyTokens = async(req, res, next) => {
    const accessToken = req.cookies["access_token"];

    if (accessToken) {
        try {
            req.user = jwtUtils.verifyAccessToken(accessToken);
            return res.status(200);
        }
        catch (err) {

            const refreshToken = req.cookies["refresh_token"];

            if (!refreshToken) {
                return res.status(401).json("Unauthorized");
            }

            const { newToken, newRefreshToken, user } = await AuthService.refreshTokens(refreshToken);

            if (newToken && newRefreshToken) {
                res.cookie('access_token', newToken, { httpOnly: true, sameSite: true });
                res.cookie('refresh_token', newRefreshToken, { httpOnly: true, sameSite: true });
                req.user = user;
            }
        }
    }
    next();
};