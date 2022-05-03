import React from 'react';
import { Redirect } from 'react-router';


const redirectHOC = (Component) => {
    const AuthRedirectContainer = (props) => {
        if(!props.isAuth) {
            return <Redirect to={'/login'} />
        }
        return <Component {...props} />
    }
    return AuthRedirectContainer;
}

export default redirectHOC;