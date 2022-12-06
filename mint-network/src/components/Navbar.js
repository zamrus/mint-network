import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
          <div>
            <Link to='/profile'>Profile</Link>
          </div>
          <div>
            <Link to='/users'>Users</Link>
          </div>
          <div>
            <Link to='/messages'>Messages</Link>
          </div>
          <div>
            <Link to='/settings'>Settings</Link>
          </div> 
        </nav>
    )
}

export default Navbar;