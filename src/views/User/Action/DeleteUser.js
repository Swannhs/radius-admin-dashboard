import React, {Component} from 'react';
import RadiusApi from "../../../radius-api/RadiusApi";
import Cookies from "universal-cookie/lib";
import {AiFillDelete} from "react-icons/all";

class DeleteUser extends Component {

    onConfirmDelete = () => {
        confirm('Delete the user?') ? this.onDeleteUser(this.props.delId): null
    }

    onDeleteUser = (id) => {
        const cookie = new Cookies;
        RadiusApi.post('/access-providers/delete.json', {'id': id}, {
            params: {
                token: cookie.get('Token')
            }
        })
            .then(response => {
                    console.log(response)
                }
            )
    }


    render() {
        return (
            <>
                <AiFillDelete onClick={this.onConfirmDelete}/>
            </>
        );
    }

}

export default DeleteUser;
