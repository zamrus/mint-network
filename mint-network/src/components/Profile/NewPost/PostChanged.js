import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { completeChangePost } from "../../../redux/reducers/profileReducer";


const PostChanged = (props) => {

    const dispatch = useDispatch();

    let [changingPostText, changePost] = useState(props.changingValue);

    return (
        <div>
            <textarea autoFocus 
                      value={changingPostText} 
                      onChange={(e) => {changePost(e.target.value)}}></textarea>
            <button onClick={() => dispatch(completeChangePost(changingPostText))}>done</button>
        </div>
    )
}

export default PostChanged;