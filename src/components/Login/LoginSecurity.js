import axios from "axios";
import setJwtToken from "../../radius-api/SecurityUtill/setJwtToken";


export const login = loginRequest => async dispatch =>{
    try {

        //    Post -> Login Request

        const response = axios.post('http://127.0.0.1/cake3/rd_cake/dashboard/authenticate.json', loginRequest);

        //    Extract token from response data

        const {token} = response.data;

        localStorage.setItem('token',token);

        //    Store the token in the local storage

        setToken(token);

    }catch (error){
        console.log(error)
    }



//    Set token in header

//    Decode token in React

//    Dispatch in security Reducer
}