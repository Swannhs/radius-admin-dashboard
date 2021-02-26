import axios from "axios";


export default axios.create({
    baseURL: 'http://127.0.0.1/cake3/rd_cake',
    headers: {'Content-Type': 'application/json'},
    // params: {
    //     node: 0,
    //     sel_language: '4_4'
    // }
})
