const UserService = require('../user');
const jwtUtils = require('../../utils/jwt');

async function verifyTokens(accessToken, refreshToken) {
  console.log('Auth Service: verifyTokens');

  let newAccessToken, newRefreshToken, authUser;

  try {
    authUser = jwtUtils.verifyAccessToken(accessToken);
    newAccessToken = jwtUtils.generateAccessToken(authUser.id, authUser.role);
    newRefreshToken = jwtUtils.generateRefreshToken(authUser.id);
  }
  catch (error) {
    const userId = jwtUtils.verifyRefreshToken(refreshToken)?.id;

    if (!userId) {
      console.log('Something went wrong: Service: auth.refreshTokens', error);
      throw new Error('Invalid or Expired Refresh token')
    }

    const authUser = await UserService.findById(userId);

    newAccessToken = jwtUtils.generateAccessToken(authUser.id, authUser.role);
    newRefreshToken = jwtUtils.generateRefreshToken(authUser.id);

    return {
      newAccessToken,
      newRefreshToken,
      user: {
        id: authUser.id,
        role: authUser.role,
        username: authUser.username
      },
    };
  }
}

module.exports = {
  verifyTokens,
}