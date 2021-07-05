
const ioEvents = require('./events');

var initSocket = (httpServer) => {

    const io = require("socket.io")(httpServer);

    // Force Socket.io "websockets", instead of default Long Polling.
    // io.set('transports', ['websocket']);

    // Define all Events
    ioEvents(io);

    // The server object will be then used to list to a port number
    return httpServer;
}

module.exports = initSocket;