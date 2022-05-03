import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
          <div>
            <NavLink to='/profile'>Profile</NavLink>
          </div>
          <div>
            <NavLink to='/users'>Users</NavLink>
          </div>
          <div>
            <NavLink to='/messages'>Messages</NavLink>
          </div>
          <div>
            <NavLink to='/settings'>Settings</NavLink>
          </div>
          <div>
            <NavLink to='/login'>Login</NavLink>
          </div>  
        </nav>
    )
}

export default Navbar;