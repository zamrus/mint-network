import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage, typeNewMessage } from "../redux/reducers/messagesReducer";

const Messages = (props) => {
 
    let dispatch = useDispatch();
   
    let uimessages = props.msg.map((obj) => {
        return <div>{obj.text}</div>
    })
    
    return (
        <div>
            Messages info
            <div>список добавленных пользователей или ничего</div>
            <div>
                <textarea onChange={(event) => dispatch(typeNewMessage(event.target.value))} value={props.message}></textarea>
            </div>
            <div>
                <button onClick={() => dispatch(sendMessage())}>Отправить</button>
            </div>
            <div>
                {uimessages}
            </div>
          </div>
    )
}

const MessagesContainer = () => {
    let message = useSelector(state => state.messages.newMessageText);
    let msg = useSelector(state => state.messages.messages);
    return (
        <Messages message={message} msg={msg} />
    )
}

export default MessagesContainer;

