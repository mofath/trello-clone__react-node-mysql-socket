const db = require('../../models');

async function login({ username, password }) {
  console.log('Auth Service: login');

  try {
    const user = await db.User.findOne({
      where: { username },
      attributes: [
        'id',
        'username',
        'password',
        'role',
      ],
    });

    if (user === null) {
      throw new Error(`User not found`);
    }

    const passwordMatches = await user.comparePassword(password);

    if (passwordMatches !== true) {
      throw new Error('Password Not Matching');
    }

    const userPlain = user.get({ plain: true });
    delete userPlain.password;
    return userPlain;

  } catch (error) {
    console.log('Something went wrong: Service: auth.login', error);
    throw new Error(error);
  }
}

module.exports = {
  login,
};


