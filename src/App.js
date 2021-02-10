import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AdminLayout from "layouts/Admin.js";
import LoginAction from "./components/Login/LoginAction";
import LoginUI from "./components/Login/LoginUI";

class App extends Component {
    render() {
        return (

            <BrowserRouter>

                {/*------------Public Route -------------------*/}
                <Route path='/' component={LoginAction}/>
                <Route exact path='/login' component={LoginUI}/>
                {/*------------Public Route -------------------*/}

                <Switch>
                    <Route path="/admin" render={(props) => <AdminLayout {...props} />}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;