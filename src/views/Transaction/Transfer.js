import React, {Component} from 'react';
import {Link} from "react-router-dom";
import AllUser from "./AllUser";
import Cookies from "universal-cookie/lib";
import RadiusApi from "../../radius-api/RadiusApi";
import {Input} from "reactstrap";
import VoucherGroup from "../Voucher/CreateVoucher/VoucherGroup";
import VoucherProfile from "../Voucher/CreateVoucher/VoucherProfile";

class Transfer extends Component {
    state = {
        transaction_id: 11,
        user_id: 33,
        partner_user_id: '',
        realm_id: '',
        profile_id: '',
        balance: ''
    }

    onTransactionComplete = () => {
        console.log('onTransactionComplete')
        let data = this.state
        RadiusApi.post('/voucher-transactions/add.json', data)
            .then(response => {
                console.log(response)
            })
    }

    onCreatePartner = async data => {
        this.setState({
            partner_user_id: data
        })
    }

    onCreateGroup = async data => {
        this.setState({
            realm_id: data
        })
    }

    onCreateProfile = async data => {
        this.setState({
            profile_id: data
        })
    }

    render() {
        return (
            <div className='container'>
                <div className='ml-3'>
                    <Link to='/admin/transaction'>
                        <button className='ui button'>Back</button>
                    </Link>
                </div>

                <article className="card-body mx-auto" style={{maxWidth: '350px', fontSize: '20px'}}>
                    <AllUser onChange={this.onCreatePartner}/>
                    <VoucherGroup onChange={this.onCreateGroup}/>
                    <VoucherProfile onChange={this.onCreateProfile}/>
                    <Input type='number'
                        value={this.state.balance}
                           onChange={event => {
                               this.setState({
                                   balance: event.target.value
                               })
                           }}
                    />
                    <button className='ui button primary' onClick={this.onTransactionComplete}>
                        Transfer
                    </button>
                </article>

            </div>
        );
    }
}

export default Transfer;
