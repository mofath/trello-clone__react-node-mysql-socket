import React, { useState, useCallback } from "react";
import io from "socket.io-client";
import SocketContext from "./SocketContext";

// const socketOptions = {
//     jsonp: false,
//     transports: ['websocket'],
//     pingInterval: 1000 * 60 * 5,
//     pingTimeout: 1000 * 60 * 3
// };

const SocketContextProvider = (props) => {
    const [socket, setSocket] = useState(null);

    const initSocket = useCallback(() => {
        // empty uri to force socket to use proxy
        const socket = io.connect("http://localhost:3001");
        setSocket(socket);
    }, []);

    return (
        <SocketContext.Provider value={{ socket, initSocket }}>
            {props.children}
        </SocketContext.Provider>
    );
};

export default SocketContextProvider;