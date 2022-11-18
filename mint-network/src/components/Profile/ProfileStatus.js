import React, { useState } from "react";
import { useDispatch  } from "react-redux";
import { addStatus } from "../../redux/reducers/profileReducer";


const ProfileStatus = (props) => {

    let dispatch = useDispatch();

    let [isTyping, setIsTyping] = useState(false);

    let activateTyping = () => setIsTyping(true);

    let deactivateTyping = () => {
        setIsTyping(false);
        dispatch(addStatus(currentStatus));
    }

    let [currentStatus, changeStatus] = useState(props.status);
    
    let onStatusChange = (event) => {
        changeStatus(event.currentTarget.value);
    }

    return (
        <div>
            {isTyping 
                ? <input type={'text'} autoFocus onChange={onStatusChange} onBlur={deactivateTyping} value={currentStatus} />
                : <span onClick={activateTyping}>{props.status || 'enter your status'}</span>
            }
        </div>
    )
}

export default ProfileStatus;