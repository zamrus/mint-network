import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    newPostText: '',
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
        addPost(state) {
            let post = state.newPostText;
            state.posts.push({id: state.posts.length, text: post});
            state.newPostText = '';
        },
        deletePost(state, action) {
            state.posts.forEach((post) => {
                if(post.id === action.payload) {
                    state.posts = state.posts.filter(del => del.id !== post.id); // создает новый массив, в котором будут лежать объекты, чьи id несовпадают с тем, который схож с action.payload
                } 
            })
        },
        addStatus(state, action) {
            state.profileStatus = action.payload; 
        }
    }
})

export const {typeNewPost, addPost, deletePost, addStatus} = profileSlice.actions;
export default profileSlice.reducer;
