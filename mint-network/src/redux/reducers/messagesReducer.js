import { createSlice } from '@reduxjs/toolkit'; 

let initialState = {
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
        sendMessage(state, action) {
            let message = action.payload;
            state.messages.push({id: 1, text: message});        
        }
    }
})

export const {sendMessage} = messagesSlice.actions;
export default messagesSlice.reducer;
