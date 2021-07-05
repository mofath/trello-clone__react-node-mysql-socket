const AuthService = (httpClient) => {

    const getAllTasks = async () => {
        const { data } = await httpClient.get('http://localhost:3001/api/v1/task');
        return data;
    };

    const updateTask = async (taskData) => {
        const { data } = await httpClient.post('http://localhost:3001/api/v1/task', taskData);
        return data;
    };

    const AddTask = async (task) => {
        const { data } = await httpClient.get('/auth/token', task);
        return data;
    };

    return Object.freeze({
        getAllTasks,
        updateTask,
        AddTask
    });
};

export default AuthService;
