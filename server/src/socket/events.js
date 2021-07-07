const eventNames = require('./event_names');
const { TaskService } = require('../services');

module.exports = (io) => {

    io.on(eventNames.CONNECTION, (socket) => {
        console.log('New connection', socket.id);

        socket.on(eventNames.ADD_TASK, async (task) => {
            console.log('socketData: ' + JSON.stringify(task));
            try {
                const result = await TaskService.create(task);
                io.emit(eventNames.TASK_ADDED, result)
            } catch (error) {
                console.log(error.message);
            }
        });

        socket.on(eventNames.UPDATE_TASK, async (data) => {
            console.log('socketData: ' + JSON.stringify(data));
            try {
                const result = await TaskService.updateTaskStatus(data);
                io.emit(eventNames.TASK_UPDATED, result)
            } catch (error) {
                console.log(error.message);
            }
        });
    });
}
