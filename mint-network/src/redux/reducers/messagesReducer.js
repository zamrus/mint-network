import { createSlice } from '@reduxjs/toolkit'; 

let initialState = {
    newMessageText: '',
    addedUsers: [
        {id: 1, name: 'Vasya'},
        {id: 2, name: 'Dasha'},
        {id: 3, name: 'Olga'},
        {id: 4, name: 'Lera'},
        {id: 5, name: 'Dima'},
    ],
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
