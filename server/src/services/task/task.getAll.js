const db = require('../../models');

async function getAll() {
  console.log('Task Service: findAll');

  try {
    const tasks = await db.Task.findAll();
    return tasks;
  } catch (error) {
    console.log('Something went wrong: Service: task.findAll', error);
    throw new Error(error);
  }
};

module.exports = {
  getAll,
}