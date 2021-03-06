import React, {Component} from 'react';
import {Link} from "react-router-dom";

class CreateUserUi extends Component {

    state = {
        parent_id: '0',
        username: '',
        password: '',
        name: '',
        surname: '',
        phone: '',
        email: '',
        address: '',
        language: "4_4",
        active: 'active',

        errors: []
    }

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state)
    }


    render() {
        return (
            <>
                <div className="container" style={{fontSize: '20px'}}>
                    <div className='ml-3'>
                        <Link to='/admin/users/view'>
                            <button className='ui button'>Back</button>
                        </Link>
                    </div>

                    <article className="card-body mx-auto" style={{maxWidth: '350px', fontSize: '20px'}}>


                        <h2 className="card-title mt-3 text-center p-3">Create Account</h2>


                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-user"/> </span>
                            </div>
                            <input name className="form-control" placeholder="User Name" type="text"
                                   value={this.state.username}
                                   onChange={event => this.setState({username: event.target.value})}
                            />
                        </div>

                        <p className='mr-0 p-0 text-danger'>{this.state.errors ? this.state.errors.username : null}</p>

                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-lock"/> </span>
                            </div>
                            <input className="form-control" placeholder="Create password" type="text"
                                   value={this.state.password}
                                   onChange={event => this.setState({password: event.target.value})}
                            />
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-building"/> </span>
                            </div>
                            <select className="form-control">
                                <option selected>Not implemented</option>
                                <option>Agent</option>
                                <option>Seller</option>
                            </select>
                        </div>


                        {/* -------------------------Personal Info-------------------// */}


                        <h4 className="card-title mt-3 text-center">Personal Information</h4>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-envelope"/> </span>
                            </div>
                            <input name className="form-control" placeholder="Email address" type="email"
                                   value={this.state.email}
                                   onChange={event => {
                                       this.setState({email: event.target.value})
                                   }}
                            />
                        </div>
                        {/* form-group// */}
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-phone"/> </span>
                            </div>
                            {/*<select className="custom-select" style={{maxWidth: '120px'}}>*/}
                            {/*    <option selected>+971</option>*/}
                            {/*    <option value={1}>+972</option>*/}
                            {/*    <option value={2}>+198</option>*/}
                            {/*    <option value={3}>+701</option>*/}
                            {/*</select>*/}
                            <input name className="form-control" placeholder="Phone number" type="number"
                                   value={this.state.phone}
                                   onChange={event => {
                                       this.setState({phone: event.target.value})
                                   }}
                            />
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-user"/> </span>
                            </div>
                            <input name className="form-control" placeholder="Name" type="text"
                                   value={this.state.name}
                                   onChange={event => this.setState({name: event.target.value})}
                            />
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-user"/> </span>
                            </div>
                            <input name className="form-control" placeholder="Surname" type="text"
                                   value={this.state.surname}
                                   onChange={event => this.setState({surname: event.target.value})}
                            />
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-user"/> </span>
                            </div>
                            <input name className="form-control" placeholder="Address" type="text"
                                   value={this.state.address}
                                   onChange={event => this.setState({address: event.target.value})}
                            />
                        </div>
                        {/* form-group// */}
                        {/* form-group end.// */}

                        {/* form-group// */}
                        <div className="form-group">
                            {/*<Link to='/admin/users/view'>*/}
                            <button type="submit" className="ui button primary"
                                    onClick={this.onFormSubmit}
                            >
                                Create
                            </button>
                            {/*</Link>*/}
                        </div>
                    </article>
                </div>
                {/* card.// */}
            </>
        );
    }
}

export default CreateUserUi;
