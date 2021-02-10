import React, {Component} from 'react';
import RadiusApi from './../../radius-api/login-api/RadiusApi';
import Cookies from "universal-cookie";

class LoginAction extends Component {

    componentDidMount() {
        const cookie = new Cookies();
        cookie.get('Token') ? this.props.history.push('/admin/dashboard')
            : this.props.history.push('/login');
    }
    render() {
        return null;
    }
}

export default LoginAction;