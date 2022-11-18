import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/reducers/appReducer';

const Login = () => {
    let dispatch = useDispatch();
    return (
        <div>
            <div>
                <input type='text' placeholder='nickname'></input>
            </div>
            <div>
                <input type='password' placeholder='password'></input>
            </div>
            <div>
                <input type='checkbox' /> remember me
            </div>
            <button onClick={() => dispatch(login())}>enter</button>
        </div>
    )
}

export default Login;