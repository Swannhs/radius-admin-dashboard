import React, {Component} from 'react';
import './CreateUser.css';
import RadiusApi from "../../radius-api/login-api/RadiusApi";
import Cookies from "universal-cookie/lib";
import {Alert} from "react-bootstrap";

class CreateUser extends Component {

    state = {
        username: '',
        password: '',
        errors: []
    }

    // async componentDidMount() {
    //     const cookie = new Cookies();
    //     await RadiusApi.get('/cake3/rd_cake/access-providers/child-check.json', {
    //         params: {
    //             token: cookie.get('Token')
    //         }
    //     }).then(response => {
    //         console.log(response)
    //     })
    // }

    onCreateUser = async event => {
        event.preventDefault();

        const cookie = new Cookies();
        const data = {
            parent_id: '0',
            username: this.state.username,
            password: this.state.password,
            language: "4_4",
            active: 'active'
        }
        await RadiusApi.post('/cake3/rd_cake/access-providers/add.json', data, {
            params: {
                token: cookie.get('Token')
            }
        })
            .then(response => {

                this.setState({
                    username: '',
                    password: '',
                    errors: response.data.errors
                })
                console.log(this.state.errors)
            })
    }


    render() {
        return (
            <div className="container">
                <div className="card">
                    <article className="card-body mx-auto" style={{maxWidth: '400px'}}>
                        <h4 className="card-title mt-3 text-center">Create Account</h4>
                        <form method='post' onSubmit={this.onCreateUser}>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-user"/> </span>
                                </div>
                                <input name className="form-control" placeholder="User Name" type="text"
                                       value={this.state.username}
                                       onChange={event => this.setState({username: event.target.value})}
                                />
                            </div>
                            <p className='mr-0 p-0 text-danger'>{this.state.errors.username}</p>
                            {/* form-group// */}
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-envelope"/> </span>
                                </div>
                                <input name className="form-control" placeholder="Email address" type="email"/>
                            </div>
                            {/* form-group// */}
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-phone"/> </span>
                                </div>
                                <select className="custom-select" style={{maxWidth: '120px'}}>
                                    <option selected>+971</option>
                                    <option value={1}>+972</option>
                                    <option value={2}>+198</option>
                                    <option value={3}>+701</option>
                                </select>
                                <input name className="form-control" placeholder="Phone number" type="text"/>
                            </div>
                            {/* form-group// */}
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-building"/> </span>
                                </div>
                                <select className="form-control">
                                    <option selected> Select job type</option>
                                    <option>Agent</option>
                                    <option>Seller</option>
                                </select>
                            </div>
                            {/* form-group end.// */}
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-lock"/> </span>
                                </div>
                                <input className="form-control" placeholder="Create password" type="text"
                                       value={this.state.password}
                                       onChange={event => this.setState({password: event.target.value})}
                                />
                            </div>
                            {/* form-group// */}
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary"> Create Account</button>
                            </div>
                        </form>
                    </article>
                </div>
                {/* card.// */}
            </div>
        );
    }
}

export default CreateUser;
