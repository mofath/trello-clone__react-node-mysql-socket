const db = require('../../models');

async function updateTaskStatus(id, status) {
  console.log('Auth Service: updateTaskStatus');

  try {
    await db.Task.update(
      { status: status },
      { where: { _id: id } }
    )
  } catch (error) {
    console.log('Something went wrong: Service: task.updateTaskStatus', error);
    throw new Error(error);
  }
};

module.exports = {
  updateTaskStatus,
}