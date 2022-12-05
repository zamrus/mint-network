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
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

// div id='appWrapper' == <AppWrapper> s-c
// div id='dynamicSection' == <DynamicSection> s-c

const AppContainer = () => {

 let initialized = useSelector(state => state.app.initialized);

 useEffect(() => {
   console.log('server request: initialied or not')
}, [])

  return (
    <div>
      { initialized
        ? <App />
        : <Login /> // later it will be preloader
      } 
    </div>
  )
}
 
export default AppContainer;
