import React from "react";
import { useDispatch } from "react-redux";
import { addNewPost, typeNewPost } from "../../../redux/reducers/profileReducer";
import PostChanged from "./PostChanged";
import PostUnchanged from "./PostUnchanged";


const NewPost = (props) => {

    const dispatch = useDispatch();
   
    let uiposts = props.posts.map((obj) => {
        return (
            <div>
                {obj.changed
                    ? <PostChanged changingValue={props.changingValue} />
                    : <PostUnchanged text={obj.text} id={obj.id} />
                } 
            </div>
        )
    }) // логика написания исправления уже созданного поста
    return (
        <div>
            <textarea value={props.newValue} onChange={(event) => {
                dispatch(typeNewPost(event.target.value));
            }}></textarea>
            <button onClick={() => dispatch(addNewPost())}>добавить пост</button>
            <div>{uiposts}</div>
        </div>
    )
}

export default NewPost;