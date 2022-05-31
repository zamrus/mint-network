import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    newPostText: '',
    changingPostText: '',
    posts: [],
    profileStatus: '',

}

let profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        typeNewPost(state, action) {
            state.newPostText = action.payload;
        },
        addNewPost(state) {
            let post = state.newPostText;
            state.posts.push({id: state.posts.length, text: post, changed: false});
            state.newPostText = '';
        },
        deletePost(state, action) {
            state.posts.forEach((post) => {
                if(post.id === action.payload) {
                    state.posts = state.posts.filter(del => del.id !== post.id); // создает новый массив, в котором будут лежать объекты, чьи id несовпадают с тем, который схож с action.payload
                } 
            })
        },
        setChangingPost(state, action) {
            state.posts.forEach((post) => {
                if(post.id === action.payload) {
                    post.changed = true;
                    state.changingPostText = post.text;
                } else {
                    post.changed = false;
                }     
            })
        },
        changeCurrentPost(state, action) {
           state.changingPostText = action.payload;
        },
        completeChangePost(state) {
            state.posts.forEach(post => {
                if(post.changed) {
                    post.text = state.changingPostText;
                    state.changingPostText = '';
                    post.changed = false;
                }
            })
        },
        addStatus(state, action) {
            state.profileStatus = action.payload; 
        }
    }
})

export const {typeNewPost, addNewPost, deletePost, setChangingPost, changeCurrentPost, completeChangePost, addStatus} = profileSlice.actions;
export default profileSlice.reducer;
