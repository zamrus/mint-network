import React from "react";
import { useDispatch } from "react-redux";
import { addNewPost, deletePost, typeNewPost, setChangingPost, changeCurrentPost, completeChangePost } from "../../redux/reducers/profileReducer";

const NewPost = (props) => {
    debugger
    const dispatch = useDispatch();
   
    let uiposts = props.posts.map((obj) => {
        return (
            <div>
                {obj.changed
                    ? <div>
                        <textarea autoFocus value={props.changingValue} onChange={(event) => {
                            dispatch(changeCurrentPost(event.target.value))
                        }}></textarea>
                        <button onClick={() => dispatch(completeChangePost())}>done</button>
                      </div>
                    : <div>
                        <div>{obj.text}</div>
                        <button onClick={() => dispatch(deletePost(obj.id))}>delete post</button>
                        <button onClick={() => dispatch(setChangingPost(obj.id))}>change post</button>
                      </div>
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