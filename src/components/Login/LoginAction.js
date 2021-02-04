import React, {Component} from 'react';
import RadiusApi from './../../radius-api/login-api/RadiusApi';

class LoginAction extends Component {
    state = {
        username:'',
        password:''
    }

    onLoginAction = async term=>{
        const response = await RadiusApi.post('/cake3/rd_cake/dashboard/authenticate.json')
        console.log(response)
    }
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default LoginAction;