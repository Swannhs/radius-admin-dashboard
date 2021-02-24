import React, {Component} from 'react';
import Cookies from "universal-cookie/lib";
import RadiusApi from "../../../radius-api/RadiusApi";
import {Form} from "react-bootstrap";

class VoucherGroup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            group: []
        }
    }

    componentDidMount() {
        const cookie = new Cookies;

        RadiusApi.get('/cake3/rd_cake/realms/index-ap-create.json', {
            params: {
                token: cookie.get('Token')
            }
        })
            .then(response => {
                this.setState({
                    select: '',
                    group: response.data.items
                })
            })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState !== this.state) {
            this.props.onChange(this.state.select)
        }
    }


    onHandleChange = event => {
        this.setState({
            select: event.target.value
        })
    }


    render() {
        return (
            <Form.Group>
                <div className="w-50 p-3">
                    <h3 className='text-black-50'>Group</h3>
                    <Form.Control
                        as="select"
                        className="mr-sm-2"
                        id="inlineFormCustomSelect"
                        custom
                        value={this.state.select}

                        onChange={event => this.onHandleChange(event)}
                    >
                        <option>Choose...</option>

                        {this.state.group.map((items) => {
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

export default VoucherGroup;
