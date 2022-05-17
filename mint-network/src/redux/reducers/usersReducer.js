import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    usersData: [
        {id: 1, name: 'Nikita', followed: false},
        {id: 2, name: 'Sergey', followed: false},
        {id: 3, name: 'Oksana', followed: false},
        {id: 4, name: 'Nina', followed: false}
    ],
    isFollowing: []
}

let usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        follow(state, action){
            state.usersData.forEach(user => {
                if(user.id === action.payload) {
                    user.followed = true;
                }
            });
        },
        unfollow(state, action){
            state.usersData.forEach(user => {
                if(user.id === action.payload) {
                    user.followed = false;
                }
            })
        }
    }
})

export const {follow, unfollow} = usersSlice.actions;
export default usersSlice.reducer;