import React, {Component} from 'react';
import {Col, Form} from "react-bootstrap";
import Cookies from "universal-cookie/lib";
import RadiusApi from "../../radius-api/login-api/RadiusApi";

class GetOwner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            owner: '',
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

    // handleChange(event) {
    //     this.setState({
    //         owner: event.target.value.toString
    //     })
    //     console.log(event.target.value.toString())
    //     // console.log(this.state.owner)
    // }


    render() {
        return (
            <div className="w-50 p-3">
                <h3 className='text-black-50'>Owner</h3>
                <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
                    Preference
                </Form.Label>
                <Form.Control
                    as="select"
                    className="mr-sm-2"
                    id="inlineFormCustomSelect"
                    custom
                    value={this.state.owner}

                    onChange={event => {
                        this.setState({
                            owner: event.target.value
                        })
                    }}
                >
                    <option>Choose...</option>
                    {this.state.agents ? this.state.agents.map((items) => {
                        return (
                            <>
                                <option value={items.username}>{items.username}</option>
                            </>
                        )
                    }) : null}
                </Form.Control>
            </div>
        );
    }
}

export default GetOwner;
