const eventNames = require('./event_names');

module.exports = (io) => {

    io.on(eventNames.CONNECTION, (socket) => {
        console.log('New connection', socket.id);

        socket.on(eventNames.ADD_TASK, (task) => {
            console.log('socketData: ' + JSON.stringify(task));
        });

        socket.on(eventNames.UPDATE_TASK, (data) => {
            console.log('socketData: ' + JSON.stringify(data));
        });
    });
}
