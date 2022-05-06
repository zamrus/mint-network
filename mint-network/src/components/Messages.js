import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage, typeNewMessage } from "../redux/reducers/messagesReducer";

const Messages = () => {
    let dispatch = useDispatch();
    let message = useSelector((state) => state.messages.newMessageText);
    let msg = useSelector((state) => state.messages.messages);
    let uimessages = msg.map((obj) => {
        return <div>{obj.text}</div>
    })
    
    return (
        <div>
            Messages info
            <div>список добавленных пользователей или ничего</div>
            <div>
                <textarea onChange={(event) => dispatch(typeNewMessage(event.target.value))} value={message}></textarea>
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

export default Messages;

