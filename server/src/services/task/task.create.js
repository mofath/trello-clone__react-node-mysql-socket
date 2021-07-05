const db = require('../../models');

async function create(task) {
  console.log('Task Service: create');

  try {
    const createdTask = await db.Task.create(task);
    return createdTask;

  } catch (error) {
    console.log('Something went wrong: Service: task.create', error);
    throw new Error(error);
  }
};

module.exports = {
  create,
};
