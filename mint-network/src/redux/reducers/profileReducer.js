import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    newPostText: '',
    posts: []
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
            
        }
    }
})

export const {typeNewPost, addPost} = profileSlice.actions;
export default profileSlice.reducer;
