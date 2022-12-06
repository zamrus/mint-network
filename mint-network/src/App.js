import React, {useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileContainer from './components/Profile/Profile';
import UsersContainer from './components/Users/Users';
import MessagesContainer from './components/Messages';
import HeaderContainer from './components/Header';
import Navbar from './components/Navbar';
import Settings from './components/Settings';
import Login from './components/Login';


const App = () => {
  return (
      <div id='appWrapper'> 
        <HeaderContainer />
        <Navbar />        
        <div id='dynamicSection'>
          <Routes>
            <Route path='/profile' element={<ProfileContainer />} />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/messages' element={<MessagesContainer />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
  );
}

// div id='appWrapper' == <AppWrapper> s-c
// div id='dynamicSection' == <DynamicSection> s-c

const AppContainer = () => {

  useEffect(() => {console.log('server request: initialied or not')}, [])

  let initialized = useSelector(state => state.app.initialized);

  return (
    <div>
      { initialized
        ? <App />
        : <Login />
      } 
    </div>
  )
}
 
export default AppContainer;
