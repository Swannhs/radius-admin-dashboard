import React, {Component} from 'react';
import RadiusApi from "../../radius-api/RadiusApi";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Cookies from "universal-cookie/lib";


class VoucherApi extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userData: [],
            page: 1,
            start: 0,
            total: 0,
        }
    }


    componentDidMount() {
        const cookie = new Cookies
        RadiusApi.get('/cake3/rd_cake/vouchers/index.json', {
            params: {
                page: this.state.page,
                start: 0,
                limit: 5,
                token: cookie.get('Token')
            }
        })
            .then(response => {
                this.setState({
                    userData: response.data.items,
                    total: response.data.totalCount
                })
            })
        let i=[1,2,3];

        i.map((i)=>{
            console.log(i)
        })
    }


    render() {
        return (
            <>
                {(this.state.userData) ? this.state.userData.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td>{item.realm}</td>
                            <td>{item.profile}</td>
                            <td>{item.name}</td>
                            {/*<td>{item.active ? <span>Active</span> : <span>Inactive</span>}</td>*/}
                        </tr>
                    )
                }) : <Loader type="ThreeDots" color="#00BFFF" height={80} width={80}/>
                }


                {/*--------------------Pagination------------------------*/}
                <tfoot>
                <tr>
                    <th colSpan={5}>
                        <div className="ui right floated pagination menu">
                            <a className="icon item">
                                <i className="left chevron icon"/>
                            </a>
                            <span className="item">1</span>
                            <span className="item">2</span>
                            <span className="item">3</span>
                            <span className="item">4</span>
                            <span className="icon item">
                                <i className="right chevron icon"/>
                            </span>
                        </div>
                    </th>
                </tr>
                </tfoot>

            </>

        );
    }
}

export default VoucherApi;
