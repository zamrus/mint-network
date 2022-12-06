import React, { useEffect, useState } from "react";
import { useDispatch  } from "react-redux";
import { addStatus } from "../../redux/reducers/profileReducer";


const ProfileStatus = (props) => {

    let dispatch = useDispatch(); // позволет отправлять экшены в редьюсер

    let [isTyping, setIsTyping] = useState(false); // локально меняет строку на поле ввода и обратно

    let [currentStatus, changeStatus] = useState(props.status); // принимает через пропсы текст из стора, создает функцию посимвольного ввода в поле 

    let activateTyping = () => setIsTyping(true); // меняет локальный стейт, дает возможность печатать в поле ввода

    let deactivateTyping = () => { // возвращает строку, отправляет напечатанный текст через экшен в редьюсер
        setIsTyping(false);
        dispatch(addStatus(currentStatus)); // currentStatus это текущий текст, набранный пользователем
    }
    
    useEffect(() => {
        changeStatus(props.status);  // при загрузке страницы помещает текст статуса из пропсов в локальный стейт 
        console.log('set status from props to local state');
    }, [props.status])

    return (
        <div>
            {isTyping 
                ? <input type={'text'} autoFocus onChange={(e) => changeStatus(e.target.value)} onBlur={deactivateTyping} value={currentStatus} />
                : <span onClick={activateTyping}>{props.status || 'enter your status'}</span>
            }
        </div>
    )
}

export default ProfileStatus;
