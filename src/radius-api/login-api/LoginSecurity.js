import React, {Component} from 'react';
import axios from "axios";
import setJwtToken from "../SecurityUtill/setJwtToken";

export const login = loginRequest => async dispatch => {
    try {

//    Post -> Login Request

        const response = await axios.post('http://127.0.0.1/cake3/rd_cake/dashboard/authenticate.json', loginRequest);

//    Extract token from response data

        const {token} = response.data;

//    Store the token in the local Storage
        localStorage.setItem('jwtToken', token);
//    Set token in header section
        setJwtToken(token);
//    Decode token on React
//    Dispatch in Security Reducer
    } catch (error) {
        console.log(error);
    }

}