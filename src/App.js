import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import AdminLayout from "layouts/Admin.js";
import Login from "./components/Login/Login";

class App extends Component {
    render() {
        return (

            <BrowserRouter>
                <Switch>
                    <Route path='/login' exact>
                        <Login/>
                    </Route>
                    <Route path="/admin" render={(props) => <AdminLayout {...props} />}/>
                    <Redirect from="/" to="/admin/dashboard"/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;