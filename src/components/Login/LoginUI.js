import React, {Component} from 'react';
import './Login.css';
import RadiusApi from "../../radius-api/login-api/RadiusApi";

class LoginUI extends Component {

    state = {
        username: '',
        password: ''
    }

    onLoginSubmit = async event => {
        event.preventDefault();
        const data = {
            username: this.state.username,
            password: this.state.password
        }
        await RadiusApi.post('/cake3/rd_cake/dashboard/authenticate.json', data)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }

    render() {
        const {errors} = this.state;

        return (
            <div className='login-container'>
                <h1 className='heading-text'>Admin Dashboard</h1>
                <div className="wrapper-login fadeInDown">
                    <div id="formContent">
                        <form method="post" onSubmit={this.onLoginSubmit}>
                            {/*<div className="alert alert-danger">*/}
                            {/*    Invalid username or password.*/}
                            {/*</div>*/}
                            {/*<div className="alert alert-info">*/}
                            {/*    You have been logged out.*/}
                            {/*</div>*/}
                            <input type="text" id="login" className="fadeIn second" name="username"
                                   placeholder="User Name" value={this.state.username}
                                   onChange={event => this.setState({username: event.target.value})}
                            />
                            <input type="text" id="password" className="fadeIn third" name="password"
                                   placeholder="Password" value={this.state.password}
                                   onChange={event => this.setState({password: event.target.value})}
                            />
                            <input type="submit" className="fadeIn fourth" defaultValue="Log In"
                            />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginUI;