import React, {Component} from 'react';
import RadiusApi from "../../../radius-api/login-api/RadiusApi";
import Cookies from "universal-cookie/lib";
import {AiFillEdit} from "react-icons/all";
import EditUi from "./components/EditUI";
import Popup from "reactjs-popup";

class EditUser extends Component {
    state = {
        parent_id: '0',
        username: '',
        password: '',
        name: '',
        surname: '',
        phone: '',
        email: '',
        address: '',
        language: "4_4",
        active: 'active',
    }


    onEditUser = () => {
        const cookies = new Cookies;
        RadiusApi.post('/cake3/rd_cake/access-providers/edit.json', this.state, {
            params: {
                token: cookies.get('Token')
            }
        })
            .then(response => console.log(response))
    }

    render() {
        return (
            <>
                <Popup trigger={<AiFillEdit/>} position="right center">
                    <div>Popup content here !!</div>
                </Popup>
            </>
        );
    }
}

export default EditUser;
