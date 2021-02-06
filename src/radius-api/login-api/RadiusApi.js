import axios from "axios";
import Cookies from "universal-cookie/es6";

const cookies = new Cookies();

export default axios.create({
    baseURL: 'http://127.0.0.1',
    headers: {'Content-Type': 'application/json'},
    params: {
        // _dc: '1612328375987',
        node: 0,
        token: cookies.get('token'),
        sel_language: '4_4'
    }
})
