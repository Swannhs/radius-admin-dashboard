import React, {Component} from 'react';
import {Link} from "react-router-dom";
import AllUser from "./AllUser";
import Cookies from "universal-cookie/lib";
import RadiusApi from "../../radius-api/RadiusApi";

class Transfer extends Component {

    onCreateTransaction = async data => {

        console.log(data)
        const cookie = new Cookies();

        await RadiusApi.post('/voucher-transactions/add.json', data)
            .then(response => {

                if (response.data.success) {
                    alert('Transaction is created successfully')
                } else
                    alert(response.data.errors.username)
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
                    <AllUser onFormSubmit={this.onCreateTransaction}/>

                </article>

            </div>
        );
    }
}

export default Transfer;
