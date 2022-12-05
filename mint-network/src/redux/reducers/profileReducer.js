import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    newPostText: '',
    changingPostText: '',
    posts: [],
    profileStatus: 'Hello',

}

let profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        typeNewPost(state, action) { // для печати нового поста
            state.newPostText = action.payload;
        },
        addNewPost(state) { // добавлет новый пост
            let post = state.newPostText;
            state.posts.push({id: state.posts.length, text: post, changed: false});
            state.newPostText = '';
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
        changeCurrentPost(state, action) { // посимвольное изменение текста в поле ввода
           state.changingPostText = action.payload;
        },
        completeChangePost(state) { // изменяет текущий пост
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
