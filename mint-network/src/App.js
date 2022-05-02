import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile/Profile';
import Users from './components/Users';
import Messages from './components/Messages';
import Settings from './components/Settings';

const App = () => {
  // все селекторы провести здесь, и далее прокинуть пропсами. это облегчит работу 
  return (
    <BrowserRouter>
      <div id='appWrapper'>
        <Header />
        <Navbar />        
        <div id='dynamicSection'>
          <Routes>
            <Route path='/profile' element={<Profile />} />
            <Route path='/users' element={<Users />} />
            <Route path='/messages' element={<Messages />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
