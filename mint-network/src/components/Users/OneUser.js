import React from "react";
import { useDispatch } from "react-redux";
import { follow, unfollow } from "../../redux/reducers/usersReducer";


const OneUser = (props) => {
    let dispatch = useDispatch();
    return (
        <div>
            <div>ава</div>
            <div>{props.name}</div>
            <div>
                {props.followed
                  ? <button onClick={() => dispatch(unfollow(props.id))}>unfollow</button>
                  : <button onClick={() => dispatch(follow(props.id))}>follow</button>
                }
            </div>
            <div>{props.status}</div>
        </div>
    )
}

export default OneUser;