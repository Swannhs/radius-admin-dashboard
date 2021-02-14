import React, {Component} from 'react';
import './CreateUser.css';
import RadiusApi from "../../radius-api/login-api/RadiusApi";
import Cookies from "universal-cookie/lib";
import CreateUserUi from "./CreateUserUI";

class CreateUser extends Component {

    onCreateUser = async data => {

        const cookie = new Cookies();

        await RadiusApi.post('/cake3/rd_cake/access-providers/add.json', data, {
            params: {
                token: cookie.get('Token')
            }
        })
            .then(response => {

                data({
                    username: '',
                    password: '',
                    name: '',
                    surname: '',
                    phone: '',
                    email: '',
                    address: '',
                    errors: response.data.errors
                })
                if (response.data.success) {
                    alert('User Created')
                }
            })
    }


    render() {
        return (
            <CreateUserUi onFormSubmit={this.onCreateUser}/>
        );
    }
}

export default CreateUser;
