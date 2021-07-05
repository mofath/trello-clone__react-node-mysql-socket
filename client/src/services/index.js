import HttpClient from './HttpClient';
import AuthService from './AuthService';
import TaskService from './TaskService';

const initAuthService = () => {
  const httpClient = HttpClient();
  return AuthService(httpClient);
};

const initTaskService = () => {
  const httpClient = HttpClient();
  return TaskService(httpClient);
};


const configureServices = () => {
  const authService = initAuthService();
  const taskService = initTaskService();

  return {
    authService,
    taskService
  };
}

export default configureServices;

