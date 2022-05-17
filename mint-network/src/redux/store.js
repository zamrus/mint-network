import {configureStore } from '@reduxjs/toolkit';
import profileReducer from './reducers/profileReducer';
import messagesReducer from './reducers/messagesReducer';
import appReducer from './reducers/appReducer';
import usersReducer from './reducers/usersReducer';


const store = configureStore({
    reducer: {
        app: appReducer,
        profile: profileReducer,
        messages: messagesReducer,
        users: usersReducer
    }
});

export default store;

// isnt correct, it`ll removed soon; 