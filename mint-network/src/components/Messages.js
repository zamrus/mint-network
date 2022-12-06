import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../redux/reducers/messagesReducer";

const Messages = (props) => {
 
    let dispatch = useDispatch();
   
    let [newMessageText, changeNewMessage] = useState('');

    let typeNewMessage = (event) => changeNewMessage(event.target.value);

    let setMessage = () => {
        dispatch(sendMessage(newMessageText));
        changeNewMessage('');
    }

    useEffect(() => {
        console.log(`total messages: ${props.msg.length}`);
    }, [props.msg])

    let uimessages = props.msg.map((obj) => {
        return <div>{obj.text}</div>
    })

    let uiAddedUsers = props.addedUsers.map((obj) => {
        return (
            <div>
                <span>{obj.name}</span>
                <span>{`${obj.followed ? ' followed' : ' unfollowed'}`}</span>
            </div>
        )
    })
    
    return (
        <div>
            <div>{uiAddedUsers}</div>
            <div>
                <textarea onChange={typeNewMessage} value={newMessageText}></textarea>
            </div>
            <div>
                <button onClick={setMessage}>Отправить</button>
            </div>
            <div>
                {uimessages}
            </div>
          </div>
    )
}

const MessagesContainer = () => {
    let msg = useSelector(state => state.messages.messages);
    let addedUsers = useSelector(state => state.users.usersData);
    return (
        <Messages msg={msg} addedUsers={addedUsers} />
    )
}

export default MessagesContainer;

