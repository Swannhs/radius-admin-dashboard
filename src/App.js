import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import AdminLayout from "layouts/Admin.js";
import LoginUI from "./components/Login/LoginUI";
import ResponseUsers from "./radius-api/login-api/ResponseUsers";

class App extends Component {
    render() {
        return (

            <BrowserRouter>

                {/*------------Public Route -------------------*/}
                <Route exact path='/login' component={LoginUI}/>
                <Redirect from="/" to="/login"/>
                {/*------------Public Route -------------------*/}

                <Switch>



                    <Route exact path='/data' component={ResponseUsers}/>
                    <Route path="/admin" render={(props) => <AdminLayout {...props} />}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;