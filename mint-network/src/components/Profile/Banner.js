import React from "react";
import { useNavigate } from "react-router-dom";

const Banner = (props) => {

    let navigate = useNavigate();

    let toUsers = () => {
        navigate('/users')
    }

    return (
        <div>
            <div>
                <img src={''} width={''} height={''} /> avatar
            </div>
            <div id='background'>
                <button onClick={toUsers}>users: {props.users}</button>
                <span>photos </span>
                <span>music</span>
            </div>       
        </div>
    )
}

export default Banner;