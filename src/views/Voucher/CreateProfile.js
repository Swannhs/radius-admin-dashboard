import React, {Component} from 'react';
import './CreateVoucher.css';
import CreateProfileUI from "./CreateProfileUI";
import Cookies from "universal-cookie/es6";
import RadiusApi from "../../radius-api/RadiusApi";


class CreateProfile extends Component {

    onCreateVoucher = async data => {

        const cookie = new Cookies;

        await RadiusApi.post('/profiles/simple_add.json', data, {
            params: {
                token: cookie.get('Token')
            }
        })
            .then(response => console.log(response))
    }

    render() {
        return (
            <>
                <CreateProfileUI onFormSubmit={this.onCreateVoucher}/>
            </>
        );
    }
}

export default CreateProfile;
