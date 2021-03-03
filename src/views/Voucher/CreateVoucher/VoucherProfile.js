import React, {Component} from 'react';
import Cookies from "universal-cookie/lib";
import RadiusApi from "../../../radius-api/RadiusApi";
import {Form} from "react-bootstrap";

class VoucherProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            select: '',
            profile: []
        }
    }

    componentDidMount() {
        const cookie = new Cookies;

        RadiusApi.get('/profiles/index-ap.json', {
            params: {
                token: cookie.get('Token')
            }
        })
            .then(response => {
                this.setState({
                    profile: response.data.items
                })
            })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (prevState !== this.state){
            this.props.onChange(this.state.select)
        }
    }


    onHandleChange = event => {
        event.preventDefault();

        this.setState({
            select: event.target.value
        })
    }


    render() {
        return (
            <Form.Group>
                <div className="w-50 p-3">
                    <h3 className='text-black-50'>Profile</h3>
                    <Form.Control
                        as="select"
                        className="mr-sm-2"
                        id="inlineFormCustomSelect"
                        custom
                        value={this.state.select}

                        onChange={event => this.onHandleChange(event)}
                    >
                        <option>Choose...</option>
                        {this.state.profile.map((items) => {
                            return (
                                <>
                                    <option key={items.id} value={items.id}>{items.name}</option>
                                </>
                            )
                        })}
                    </Form.Control>
                </div>
            </Form.Group>
        );
    }
}

export default VoucherProfile;
