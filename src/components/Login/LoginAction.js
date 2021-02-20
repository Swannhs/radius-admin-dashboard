import React, {Component} from 'react';
import RadiusApi from '../../radius-api/RadiusApi';
import Cookies from "universal-cookie";

class LoginAction extends Component {

    componentDidMount() {
        const cookie = new Cookies();
        cookie.get('Token') ? this.props.history.push(window.location.pathname)
            : this.props.history.push('/login');
    }
    render() {
        return (
            <>
            </>
        )
    }
}

export default LoginAction;
