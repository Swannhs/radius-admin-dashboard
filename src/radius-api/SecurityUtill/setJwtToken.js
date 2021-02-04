import axios from "axios";

const setToken = token => {
    if (token) {
        // axios.defaults.headers.common['_dc'] = '1612328375987';
        axios.defaults.headers.common['node'] = '0';
        axios.defaults.headers.common['token'] = token;
    } else {
        delete axios.defaults.headers.common('Authorization');
    }
}
export default setToken;