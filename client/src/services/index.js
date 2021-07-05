import AuthService from './AuthService';
import HttpClient from './HttpClient';

const initAuthService = () => {
  const httpClient = HttpClient();
  return AuthService(httpClient);
};


const configureServices = () => {
  const authService = initAuthService();

  return {
    authService,
  };
}

export default configureServices;

