import { createContext } from "react";

const INITIAL_STATE = {
    socketClient: null,
    initSocket: () => null,
};

const SocketContext = createContext({
    ...INITIAL_STATE
});

export default SocketContext;