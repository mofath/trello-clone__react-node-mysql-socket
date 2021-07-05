const db = require('../../models');
const passwordUtils = require('../../utils/password');

async function create(user) {
  console.log('Auth Service: create');

  try {
    user.password = await passwordUtils.hash(user.password);
    const createdUser = await db.User.create(user);
    const plainUser = createdUser.get({ plain: true });
    delete plainUser.password;
    return plainUser;

  } catch (error) {
    console.log('Something went wrong: Service: auth.create', error);
    throw new Error(error);
  }
}

module.exports = {
  create,
};
