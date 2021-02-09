import React, {Component} from 'react';
import Cookies from "universal-cookie/es6";

class Logout extends Component {

    componentDidMount() {
        console.log('Logout called')
        const cooke = new Cookies();
        cooke.remove('Token') ? this.props.history.push('/login')
            : this.props.history.push('/admin/dashboard');
    }
}

export default Logout;