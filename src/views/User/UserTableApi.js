import React, {Component} from 'react';
import RadiusApi from "../../radius-api/login-api/RadiusApi";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Cookies from "universal-cookie";
import {AiFillDelete, AiFillEdit, AiOutlineEye, BiReset} from "react-icons/all";


class VoucherApi extends Component {
    state = {
        userData: []
    }

    componentDidMount() {
        const cookie = new Cookies;

        RadiusApi.get('/cake3/rd_cake/access-providers/index.json', {
            params: {
                //Assign limit of row showing in table
                page: 1,
                start: 0,
                limit: 50,
                token: cookie.get('Token')
            }
        })
            .then(response => {
                this.setState({userData: response.data.items})
            })
    }


    render() {
        return (
            <>
            {(this.state.userData) ? this.state.userData.map((item) => {
                return (
                    <tr key={item.id}>
                        <td data-label="Name">{item.username}</td>
                        <td data-label="Status">{item.active ? <span className='text-success'>Active</span>
                            : <span className='text-danger'>Inactive</span>}</td>
                        <td data-label="Action"><BiReset/><AiOutlineEye/><AiFillEdit/><AiFillDelete/></td>

                    </tr>

                )
            }) : <Loader type="ThreeDots" color="#00BFFF" height={80} width={80}/>

            }
            </>
        );
    }
}

export default VoucherApi;
