import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    login: false,
    nickName: 'LionKing'
}

let appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        login(state) {
            state.login = true;
        },
        logout(state) {
            state.login = false;
        }
    }
})

export const { login, logout } = appSlice.actions;
export default appSlice.reducer;