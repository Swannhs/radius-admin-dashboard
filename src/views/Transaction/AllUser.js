import React, {Component} from 'react';
import {Form} from "react-bootstrap";
import Cookies from "universal-cookie/lib";
import RadiusApi from "../../radius-api/RadiusApi";
import {Input} from "reactstrap";

class AllUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            transaction: [
                {
                    balance: 0,
                    created: null,
                    credit: 100,
                    debit: 50,
                    modified: null,
                    partner_user_id: 0,
                    profile_id: 4,
                    realm_id: 2,
                    transaction_id: '',
                    user_id: ''
                }
            ]
        }
    }

    componentDidMount() {
        const cookie = new Cookies;

        RadiusApi.get('/voucher-transactions/getUsers.json', {})
            .then(response => {
                this.setState({
                    select: '',
                    users: response.data
                })
            })
    }


    onFormSubmit = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.transaction)
    }


    render() {
        return (
            <Form.Group>
                <div className="w-50 p-3">
                    <h3 className='text-black-50'>Account</h3>
                    <Form.Control
                        as="select"
                        className="mr-sm-2"
                        id="inlineFormCustomSelect"
                        custom
                        value={this.state.select}

                        onChange={event => {
                            this.setState({
                                transaction: {
                                    partner_user_id: event.target.value
                                }
                            })
                            console.log(this.state.transaction.partner_user_id)
                        }}
                    >
                        <option>Choose...</option>

                        {this.state.users.map((items) => {
                            return (
                                <>
                                    <option key={items.id} value={items.id}>{items.username}</option>
                                </>
                            )
                        })}
                    </Form.Control>
                </div>

                <div className='w-50 p-3'>
                    <Input
                        type='number'
                        placeholder='Amount'
                        // value={this.state.transaction.balance}
                        onChange={event => {
                            this.setState({
                                transaction: {
                                    balance: event.target.value
                                }
                            })
                        }}
                    />
                </div>
                <div className="form-group">
                    {/*<Link to='/admin/users/view'>*/}
                    <button type="submit" className="ui button primary"
                            onClick={this.onFormSubmit}
                    >
                        Create
                    </button>
                    {/*</Link>*/}
                </div>
            </Form.Group>
        );
    }
}

export default AllUser;
