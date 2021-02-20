import React, {Component} from 'react';
import RadiusApi from "../../../radius-api/RadiusApi";
import Cookies from "universal-cookie/lib";
import {AiFillDelete} from "react-icons/all";
import UserList from "../UserList";
import {Redirect} from "react-router";

class DeleteUser extends Component {


    onDeleteUser = props => {
        // console.log(this.props.delId)
        const cookie = new Cookies;
        RadiusApi.post('/cake3/rd_cake/access-providers/delete.json', {'id': this.props.delId}, {
            params: {
                token: cookie.get('Token')
            }
        })
            .then(response => {
                    // <Redirect to='/admin/users/view'/>
                }
            )
    }

    render() {
        return (
            <>
                <AiFillDelete onClick={this.onDeleteUser}/>
            </>
        );
    }
}

export default DeleteUser;
