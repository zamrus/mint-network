import React from "react";
import { useDispatch } from "react-redux";
import { changeCurrentPost, completeChangePost } from "../../../redux/reducers/profileReducer";


const PostChanged = (props) => {

    const dispatch = useDispatch()

    return (
        <div>
            <textarea autoFocus 
                      value={props.changingValue} 
                      onChange={(e) => {dispatch(changeCurrentPost(e.target.value))}}></textarea>
            <button onClick={() => dispatch(completeChangePost())}>done</button>
        </div>
    )
}

export default PostChanged;