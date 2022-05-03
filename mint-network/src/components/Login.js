import React from 'react';

const Login = () => {
    return (
        <div>
            <div>
                <input type='text' placeholder='email or login'></input>
            </div>
            <div>
                <input type='password' placeholder='password'></input>
            </div>
            <div>
                <input type='checkbox' /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </div>
    )
}

export default Login;