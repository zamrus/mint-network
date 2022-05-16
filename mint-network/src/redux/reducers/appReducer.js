import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    initialized: false
}

let appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        initializeApp(state) {
            state.initialized = true;
        }
    }
})

export const { initializeApp } = appSlice.actions;
export default appSlice.reducer;