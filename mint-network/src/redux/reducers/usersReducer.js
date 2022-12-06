import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    usersData: [
        {id: 1, name: 'Nikita', followed: false, status: 'vezde pobrito'},
        {id: 2, name: 'Sergey', followed: false, status: 'ser gay'},
        {id: 3, name: 'Oksana', followed: false, status: 'ksyuha koz`e uho'},
        {id: 4, name: 'Nina', followed: false, status: 'nina konina'}
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