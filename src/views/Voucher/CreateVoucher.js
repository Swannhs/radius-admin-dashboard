import React, {Component} from 'react';
import './CreateVoucher.css';
import CreateVoucherUi from "./CreateVoucherUI";
import Cookies from "universal-cookie/es6";
import RadiusApi from "../../radius-api/RadiusApi";


class CreateVoucher extends Component {

    onCreateVoucher = async data => {

        const cookie = new Cookies;

        await RadiusApi.post('/cake3/rd_cake/profiles/simple_add.json', data, {
            params: {
                token: cookie.get('Token')
            }
        })
            .then(response => console.log(response))
    }

    render() {
        return (
            <>
                <CreateVoucherUi onFormSubmit={this.onCreateVoucher}/>
            </>
        );
    }
}

export default CreateVoucher;
