const { create } = require('./task.create');
const { getAll } = require('./task.getAll');
const { updateTaskStatus } = require('./task.updateStatus');

module.exports = {
    create,
    getAll,
    updateTaskStatus
};
