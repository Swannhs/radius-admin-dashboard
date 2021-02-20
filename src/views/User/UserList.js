import React, {Component} from 'react';
import RadiusApi from "../../radius-api/RadiusApi";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Cookies from "universal-cookie";
import {AiFillDelete, AiFillEdit, AiOutlineEye, BiReset} from "react-icons/all";
import {Table} from "react-bootstrap";
import {Dropdown, Loader} from "semantic-ui-react";
import DeleteUser from "./Action/DeleteUser";
import EditUser from "./Action/EditUser";
import {Link} from "react-router-dom";


class VoucherApi extends Component {
    state = {
        loading: true,
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
            .then(response => this.setState({
                loading: false,
                userData: response.data.items
            }))
    }


    // componentWillUpdate(nextProps, nextState, nextContext) {
    //     const cookie = new Cookies;
    //     RadiusApi.get('/cake3/rd_cake/access-providers/index.json', {
    //         params: {
    //             //Assign limit of row showing in table
    //             page: 1,
    //             start: 0,
    //             limit: 50,
    //             token: cookie.get('Token')
    //         }
    //     })
    //         .then(response => {
    //             if (this.state.userData !== response.data.items){
    //                 this.setState({
    //                     userData: response.data.items
    //                 })
    //             }
    //         })
    // }


    render() {
        return (
            <>

                {/* ---------------- New Button Start ----------------*/}
                <div className="ui grid">
                    <div className="four column row">
                        <div className="right floated column">
                            <Link to='/admin/users/create'>
                                <button className='ui button primary'>
                                    New
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ---------------- New Button End ----------------*/}

                <table className="ui celled padded table" style={{fontSize: '20px'}}>
                    <thead>
                    <tr>
                        <th className="single line">Name</th>
                        <th>Area</th>
                        <th>Balance</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {(this.state.userData) ? this.state.userData.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td data-label="Name">{item.username}</td>
                                <td data-label="Area">{item.address}</td>
                                <td data-label="Balance">10$</td>
                                <td data-label="Status">
                                    {item.active ? <span className='text-success'>Active</span>
                                        : <span className='text-danger'>Inactive</span>}</td>
                                <td data-label="Action">
                                    <BiReset/>
                                    <AiOutlineEye/>
                                    <EditUser editId={item.id}/>
                                    <DeleteUser delId={item.id}/>
                                </td>
                            </tr>

                        )
                    }) : <Loader type="ThreeDots" color="#00BFFF" height={80} width={80}/>

                    }
                    </tbody>
                    <tfoot>


                    {/*--------------------Pagination------------------------*/}
                    <tr>
                        <th colSpan={5}>
                            <div className="ui right floated pagination menu">
                                <a className="icon item">
                                    <i className="left chevron icon"/>
                                </a>
                                <a className="item">1</a>
                                <a className="item">2</a>
                                <a className="item">3</a>
                                <a className="item">4</a>
                                <a className="icon item">
                                    <i className="right chevron icon"/>
                                </a>
                            </div>
                        </th>
                    </tr>
                    </tfoot>
                </table>


                {/*-------------------Table For User lIst Start -----------------*/}

                {/*<Table className="table-hover table-striped" style={{fontSize: '20px'}}>*/}
                {/*    <thead>*/}
                {/*    <tr className='ct-grid-background border-primary'>*/}
                {/*        <th className="border-0" id='border-0'>*/}
                {/*            <p>Username</p>*/}
                {/*            <div className="ui input focus">*/}
                {/*                <input type="text" placeholder="Search..."/>*/}
                {/*            </div>*/}
                {/*        </th>*/}
                {/*        <th className="border-0" id='border-1'>*/}
                {/*            <p>Status</p>*/}

                {/*            <Dropdown text='Filter' multiple icon='filter'>*/}
                {/*                <Dropdown.Menu>*/}
                {/*                    <Dropdown.Menu scrolling>*/}
                {/*                        <Dropdown.Item>Active</Dropdown.Item>*/}
                {/*                        <Dropdown.Item>Inactive</Dropdown.Item>*/}
                {/*                    </Dropdown.Menu>*/}
                {/*                </Dropdown.Menu>*/}
                {/*            </Dropdown>*/}


                {/*        </th>*/}
                {/*        <th className="border-0">*/}
                {/*            <p>Action</p>*/}
                {/*        </th>*/}
                {/*    </tr>*/}
                {/*    </thead>*/}

                {/*    {(this.state.userData) ? this.state.userData.map((item) => {*/}
                {/*        return (*/}
                {/*            <tr key={item.id}>*/}
                {/*                <td data-label="Name">{item.username}</td>*/}
                {/*                <td data-label="Status">*/}
                {/*                    {item.active ? <span className='text-success'>Active</span>*/}
                {/*                    : <span className='text-danger'>Inactive</span>}</td>*/}
                {/*                <td data-label="Action">*/}
                {/*                    <BiReset/>*/}
                {/*                    <AiOutlineEye/>*/}
                {/*                    <EditUser editId={item.id}/>*/}
                {/*                    <DeleteUser delId={item.id}/>*/}
                {/*                </td>*/}
                {/*            </tr>*/}

                {/*        )*/}
                {/*    }) : <Loader type="ThreeDots" color="#00BFFF" height={80} width={80}/>*/}

                {/*    }*/}

                {/*</Table>*/}
                {/*-------------------Table For User lIst End -----------------*/}
            </>
        );
    }
}

export default VoucherApi;
