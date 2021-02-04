import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import AdminLayout from "layouts/Admin.js";
import LoginUI from "./components/Login/LoginUI";
import ResponseUsers from "./radius-api/login-api/ResponseUsers";

class App extends Component {
    render() {
        return (

            <BrowserRouter>
                <Switch>
                    <Route exact path='/data' component={ResponseUsers}/>
                    <Route exact path='/login' component={LoginUI}/>
                    <Route path="/admin" render={(props) => <AdminLayout {...props} />}/>
                    <Redirect from="/" to="/admin/dashboard"/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;