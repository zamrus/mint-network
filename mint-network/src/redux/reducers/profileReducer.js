import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    changingPostText: '',
    posts: [],
    profileStatus: 'Hello',
}

let profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        addNewPost(state, action) { // добавлет новый пост
            let post = action.payload;
            state.posts.push({id: state.posts.length, text: post, changed: false});
        },
        deletePost(state, action) { // проверяет айдишник, убирает пост 
            state.posts.forEach((post) => {
                if(post.id === action.payload) {
                    state.posts = state.posts.filter(del => del.id !== post.id); // создает новый массив, в котором будут лежать объекты, чьи id несовпадают с тем, который схож с action.payload
                } 
            })
        },
        setChangingPost(state, action) { // задает изменение поста, в поле ввода помещает текст поста 
            state.posts.forEach((post) => {
                if(post.id === action.payload) {
                    post.changed = true;
                    state.changingPostText = post.text;
                } else {
                    post.changed = false;
                }     
            })
        },
        completeChangePost(state, action) { // изменяет текущий пост
            state.posts.forEach(post => {
                if(post.changed) {
                    post.text = action.payload;
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

export const {addNewPost, deletePost, setChangingPost, completeChangePost, addStatus} = profileSlice.actions;
export default profileSlice.reducer;
