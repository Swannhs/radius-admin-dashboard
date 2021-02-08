import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import AdminLayout from "layouts/Admin.js";
import LoginUI from "./components/Login/LoginUI";

class App extends Component {
    render() {
        return (

            <BrowserRouter>

                {/*------------Public Route -------------------*/}
                <Route exact path='/login' component={LoginUI}/>
                <Redirect exact from="/" to="/login"/>
                {/*------------Public Route -------------------*/}

                <Switch>
                    <Route path="/admin" render={(props) => <AdminLayout {...props} />}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;