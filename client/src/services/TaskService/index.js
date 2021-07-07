const TaskService = (httpClient) => {

    const getAllTasks = async () => {
        try {
            const { data } = await httpClient.get('http://localhost:3001/api/v1/task');
            return data;
        } catch (error) {
            console.log(error.message);
            alert("Something went wrong")
        }
    };

    const updateTask = async (taskData) => {
        try {
            const { data } = await httpClient.patch('http://localhost:3001/api/v1/task', taskData);
            return data;
        } catch (error) {
            console.log(error.message);
            alert("Something went wrong");
        }
    };

    const addTask = async (task) => {
        try {
            const { data } = await httpClient.post('http://localhost:3001/api/v1/task', task);
            return data;
        } catch (error) {
            console.log(error.message);
            alert("Something went wrong");
        }
    };

    return Object.freeze({
        getAllTasks,
        updateTask,
        addTask
    });
};

export default TaskService;
