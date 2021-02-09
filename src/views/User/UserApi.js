import React, {Component} from 'react';
import RadiusApi from "../../radius-api/login-api/RadiusApi";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


class VoucherApi extends Component {
    state = {
        userData: []
    }

    componentDidMount() {
        RadiusApi.get('/cake3/rd_cake/access-providers/index.json')
            .then(response => {
                this.setState({userData: response.data.items})
            })
    }


    render() {
        return (
            <tbody>
            {(this.state.userData) ? this.state.userData.map((item) => {
                return (
                    <tr key={item.id}>
                        <td>{item.username}</td>
                        <td>{item.active ? <span className='text-success'>Active</span>
                            : <span className='text-danger'>Inactive</span>}</td>
                        <td>{item.owner}</td>
                    </tr>
                )
            }) : <Loader type="ThreeDots" color="#00BFFF" height={80} width={80}/>

            }
            </tbody>

        );
    }
}

export default VoucherApi;