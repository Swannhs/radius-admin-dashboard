import React, {Component} from 'react';
import './CreateUser.css';
import RadiusApi from "../../radius-api/RadiusApi";
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

                if (response.data.success) {
                    alert('User is created successfully')
                } else
                    alert(response.data.errors.username)
            })
    }


    render() {
        return (
            <CreateUserUi onFormSubmit={this.onCreateUser}/>
        );
    }
}

export default CreateUser;
