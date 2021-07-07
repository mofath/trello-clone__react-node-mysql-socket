const db = require('../../models');

async function findById(id) {
    console.log('User Service: findById');
    console.log(id);

    try {
        const user = await db.User.findOne({
            where: { id: id },
            attributes: [
                'id',
                'username',
                'role',
            ],
        });

        if (user === null) {
            throw new Error(`User not found`);
        }

        return user.get({ plain: true });
    }
    catch (error) {
        console.log('Something went wrong: Service: user.findById', error);
        throw new Error(error);
    }
}

module.exports = {
    findById,
};
