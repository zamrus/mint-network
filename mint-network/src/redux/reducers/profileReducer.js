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
            state.posts.push({id: '1', text: post});
        },
        addStatus(state, action) {
            state.profileStatus = action.payload; 
        }
    }
})

export const {typeNewPost, addPost, addStatus} = profileSlice.actions;
export default profileSlice.reducer;
