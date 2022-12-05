import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/reducers/appReducer";  


const Header = (props) => {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let byeBye = () => {
    dispatch(logout());
    navigate('/login');
  }
    return (
      <header>
        <div>LOGO</div>
        <div>
          <span>{props.nickName}</span>
          <button onClick={byeBye}>logout</button>
        </div>
      </header>
    )
}

const HeaderContainer = () => {
  let nickName = useSelector(state => state.app.nickName);
  return (
    <Header nickName={nickName} />
  )
}

export default HeaderContainer;