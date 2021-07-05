import axios from 'axios';

const Http = function () {

    const get = async (url) => {
        return axios.get(url);
    };

    const post = async (url, body) => {
        return axios.post(url, body);
    };

    const put = async (url, body) => {
        return axios.put(url, body);
    };

    const _delete = async (url) => {
        return axios.delete(url);
    };

    return Object.freeze({
        get,
        post,
        put,
        delete: _delete,
    });
};

export default Http;