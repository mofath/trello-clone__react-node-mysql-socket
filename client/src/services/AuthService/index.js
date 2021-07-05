const AuthService = (httpClient) => {

    const signup = async (signupData) => {
        const { data } = await httpClient.post('api/v1/auth/signup', signupData);
        return data;
    };

    const login = async (loginData) => {
        const { data } = await httpClient.post('api/v1/auth/login', loginData);
        return data;
    };

    const authenticate = async (loginData) => {
        const { data } = await httpClient.get('api/v1/auth/token', loginData);
        return data;
    };

    return Object.freeze({
        signup,
        login,
        authenticate
    });
};

export default AuthService;
