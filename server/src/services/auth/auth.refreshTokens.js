const UserService = require('../user');
const jwtUtils = require('../../utils/jwt');

async function refreshTokens(refreshToken) {
  console.log('Auth Service: refreshTokens');

  try {
    const userId = jwtUtils.verifyRefreshToken(refreshToken)?.id;

    if (!userId) {
      throw new Error('Invalid or Expired Refresh token')
    }

    const user = await UserService.findById(userId);

    const newAcessToken = jwtUtils.generateAccessToken(user.id, user.role);
    const newRefreshToken = jwtUtils.generateRefreshToken(user.id);

    return {
      newToken: newAcessToken,
      newRefreshToken: newRefreshToken,
      user,
    };

  } catch (error) {
    console.log('Something went wrong: Service: auth.refreshTokens', error);
    throw new Error(error);
  }
};

module.exports = {
  refreshTokens,
}