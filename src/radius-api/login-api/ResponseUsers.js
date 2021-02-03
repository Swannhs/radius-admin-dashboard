import React, {Component} from 'react';
import UserApi from "./UserApi";
import {Button} from "semantic-ui-react";

class ResponseUsers extends Component {
    state = {users: []}
    responseUsers = async term => {
        const res = await UserApi.get('/cake3/rd_cake/access-providers/index-tree.json')
            .then(response => {
            console.log(response.data)
        })

    }

    render() {

        return (
            <div>
                <Button onClick={this.responseUsers}>Click</Button>
            </div>
        );
    }
}

export default ResponseUsers;