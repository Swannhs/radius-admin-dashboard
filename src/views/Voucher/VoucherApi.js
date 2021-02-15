import React, {Component} from 'react';
import RadiusApi from "../../radius-api/login-api/RadiusApi";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Cookies from "universal-cookie/lib";


class VoucherApi extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userData: []
        }
    }


    componentDidMount() {
        const cookie = new Cookies
        RadiusApi.get('/cake3/rd_cake/vouchers/index.json', {
            params: {
                token: cookie.get('Token')
            }
        })
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
                        <td>{item.name}</td>
                        <td>{item.password}</td>
                        <td>{item.status}</td>
                        {/*<td>{item.active ? <span>Active</span> : <span>Inactive</span>}</td>*/}
                    </tr>
                )
            }) : <Loader type="ThreeDots" color="#00BFFF" height={80} width={80}/>

            }
            </tbody>

        );
    }
}

export default VoucherApi;
