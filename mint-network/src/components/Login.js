import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/reducers/appReducer';

const Login = () => {
    let dispatch = useDispatch();
    let navigate = useNavigate();

    let toProfilePage = () => {
        dispatch(login());
        navigate('/profile');
    }
   
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
            <button onClick={toProfilePage}>enter</button>
        </div>
    )
}

export default Login;