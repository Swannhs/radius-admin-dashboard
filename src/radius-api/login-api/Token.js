import axios from "axios";

const Token = token => {
    if (token) {
        axios.defaults.headers.common['token'] = token;
    } else delete axios.defaults.headers.common['token'];
}
export default Token;