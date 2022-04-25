import React from "react";

const NewPost = (props) => {
    return (
        <div>
            <textarea value={props.text}></textarea>
            <button>добавить пост</button>
            <div>все посты</div>
        </div>
    )
}

export default NewPost;