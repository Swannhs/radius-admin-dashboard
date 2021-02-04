import axios from "axios";

export default axios.create({
    baseURL: 'http://127.0.0.1',
    headers: { 'Content-Type': 'application/json' },
    params: {
        // _dc: '1612328375987',
        // node: 0,
        // token: 'b4c6ac81-8c7c-4802-b50a-0a6380555b50',
        // sel_language: '4_4'
    }
})
