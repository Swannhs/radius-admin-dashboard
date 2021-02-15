import React, {Component} from 'react';
import {Col, Form} from "react-bootstrap";
import Cookies from "universal-cookie/lib";
import RadiusApi from "../../radius-api/login-api/RadiusApi";

class GetOwner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            agents: []
        }
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

    render() {
        return (
            <Form.Group controlId="formBasicPassword">
                <Col xs="auto" className="w-50 p-3">
                    <Form.Label>Owner</Form.Label>
                    <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
                        Preference
                    </Form.Label>
                    <Form.Control
                        as="select"
                        className="mr-sm-2"
                        id="inlineFormCustomSelect"
                        custom
                    >
                        <option value="0">Choose...</option>
                        {this.state.agents ? this.state.agents.map((items) => {
                            return (
                                <>
                                    <option>{items.username}</option>
                                </>
                            )
                        }) : null}
                    </Form.Control>
                </Col>
            </Form.Group>
        );
    }
}

export default GetOwner;
