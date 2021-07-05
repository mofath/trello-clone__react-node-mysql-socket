module.exports = (io) => {

    io.on('connection', (socket) => {
        console.log('New connection', socket.id);

        socket.on('addTask', (task) => {
            console.log(222222222222222222222222222);
            // console.log('socketData: ' + JSON.stringify(task));
        });
    });
}
