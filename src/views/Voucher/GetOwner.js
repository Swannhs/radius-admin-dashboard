import React, {Component} from 'react';
import {Col, Form} from "react-bootstrap";
import Cookies from "universal-cookie/lib";
import RadiusApi from "../../radius-api/login-api/RadiusApi";

class GetOwner extends Component {
    state = {
        user_id: '',
        owner: '',
        agents: []
    }

    componentDidMount() {
        const cookie = new Cookies;

        RadiusApi.get('/cake3/rd_cake/access-providers/index-tree.json', {
            params: {
                node: 0,
                token: cookie.get('Token')
            }
        }).then(response => {
            this.setState({
                agents: response.data.items
            })
        })
    }


    onHandleChange = event => {
        this.setState({
            user_id: event.target.value
        })
    }

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.user_id)
    }


    render() {
        return (
            <div className="w-50 p-3">
                <h3 className='text-black-50'>Owner</h3>
                <Form.Control
                    as="select"
                    className="mr-sm-2"
                    id="inlineFormCustomSelect"
                    custom

                    value={this.state.user_id}

                    onChange={event => {
                        this.onFormSubmit(event)
                    }}

                >
                    <option value='0'>Choose...</option>
                    {this.state.agents ? this.state.agents.map((items) => {
                        return <option value={items.id}>
                            {items.username}
                        </option>
                    }) : null}
                </Form.Control>
            </div>
        );
    }
}

export default GetOwner;
