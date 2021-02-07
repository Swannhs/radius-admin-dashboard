import React, {Component, useState} from 'react';
import {Button} from "semantic-ui-react";
import RadiusApi from "../../radius-api/login-api/RadiusApi";

class UserApi extends Component {
    state = {
        userData: []
    }



    componentDidMount() {
        RadiusApi.get('/cake3/rd_cake/vouchers/index.json')
            .then(response => {
                this.setState({userData: response.data.items})
            })
    }


    render() {
        return (
            <>
                {(this.state.userData.length > 0) ? this.state.userData.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.password}</td>
                            <td>{item.status}</td>
                            {/*<td>{item.active ? <span>Active</span> : <span>Inactive</span>}</td>*/}
                        </tr>
                    )
                }) : <tr>
                    <td colSpan="5">Loading...</td>
                </tr>}
            </>

        );
    }
}

export default UserApi;