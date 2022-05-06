import { createSlice } from '@reduxjs/toolkit'; 

let initialState = {
    newMessageText: '',
    messages: []
}

let messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        typeNewMessage(state, action) {
            state.newMessageText = action.payload;
        },
        sendMessage(state) {
            let message = state.newMessageText;
            state.messages.push({id: 1, text: message});
            state.newMessageText = '';
        }
    }
})

export const {typeNewMessage, sendMessage} = messagesSlice.actions;
export default messagesSlice.reducer;
