import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    initialized: false,
    nickName: 'LionKing'
}

let appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        login(state) {
            state.initialized = true;
        },
        logout(state) {
            state.initialized = false;
        }
    }
})

export const { login, logout } = appSlice.actions;
export default appSlice.reducer;