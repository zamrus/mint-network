import React, { useEffect, useState } from "react";
import { useDispatch  } from "react-redux";
import { addStatus } from "../../redux/reducers/profileReducer";


const ProfileStatus = (props) => {

    let dispatch = useDispatch(); // позволет отправлять экшены в редьюсер

    let [isTyping, setIsTyping] = useState(false); // локально меняет строку на поле ввода и обратно

    let activateTyping = () => setIsTyping(true); // меняет локальный стейт, дает возможность печатать в поле ввода

    let deactivateTyping = () => { // возвращает строку, отправляет напечатанный текст через экшен в редьюсер
        setIsTyping(false);
        dispatch(addStatus(currentStatus)); // currentStatus это текущий текст, набранный пользователем
    }

    let [currentStatus, changeStatus] = useState(props.status); // принимает через пропсы текст из стора, создает функцию посимвольного ввода в поле 
    
    let onStatusChange = (event) => { // функция обработчик, берущая из события каждый введенный символ и передающая их в функцию хука
        changeStatus(event.currentTarget.value);
    }

    useEffect(() => {
        changeStatus(props.status);
        console.log('data was changed');
    }, [props.status])

    return (
        <div>
            <div>{`current data is ${props.status}`}</div>
            {isTyping 
                ? <input type={'text'} autoFocus onChange={onStatusChange} onBlur={deactivateTyping} value={currentStatus} />
                : <span onClick={activateTyping}>{props.status || 'enter your status'}</span>
            }
        </div>
    )
}

export default ProfileStatus;