import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className='login-container'>
            <h1 className='heading-text'>Admin Dashboard</h1>
            <div className="wrapper-login fadeInDown">
                <div id="formContent">
                    <form method="post">
                        {/*<div className="alert alert-danger">*/}
                        {/*    Invalid username or password.*/}
                        {/*</div>*/}
                        {/*<div className="alert alert-info">*/}
                        {/*    You have been logged out.*/}
                        {/*</div>*/}
                        <input type="text" id="login" className="fadeIn second" name="username"
                               placeholder="User Name"/>
                        <input type="text" id="password" className="fadeIn third" name="password"
                               placeholder="Password"/>
                        <input type="submit" className="fadeIn fourth" defaultValue="Log In"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;