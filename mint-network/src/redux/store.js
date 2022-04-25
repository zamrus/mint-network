import {createStore, combineReducers} from 'redux';
import profileReducer from './reducers/profileReducer';

let reducers = combineReducers({
    profile: profileReducer
})

let store = createStore(reducers);

export default store;

// isnt correct, it`ll removed soon; 