import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import MessagesContainer from './components/Messages';
import Settings from './components/Settings';
import Login from './components/Login';
import { useDispatch, useSelector } from 'react-redux';
import { initializeApp } from './redux/reducers/appReducer';
import ProfileContainer from './components/Profile/Profile';
import UsersContainer from './components/Users/Users';


const App = () => {
  return (
    <BrowserRouter>
      <div id='appWrapper'>
        <Header />
        <Navbar />        
        <div id='dynamicSection'>
          <Routes>
            <Route path='/profile' element={<ProfileContainer />} />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/messages' element={<MessagesContainer />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/login' element={<Login />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

const AppContainer = () => {
  let initialized = useSelector(state => state.app.initialized);
  let dispatch = useDispatch();
  return (
    <div>
      {initialized 
      ? <App />
      : <div>
          not auth
          <button onClick={() => dispatch(initializeApp())}>enter</button>
        </div>
      }
    </div>
  )
}

export default AppContainer;
