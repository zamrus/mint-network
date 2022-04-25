const ADD_POST = 'profile/ADD_POST';
const NEW_POST_TEXT = 'profile/NEW_POST_TEXT';

let initialState = {
    postsData: [],
    newPostText: 'hello, im from redux',
    profileStatus: '',
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let stateCopy = {...state};
            return stateCopy;
        }
        case NEW_POST_TEXT: {
            let stateCopy = {...state};
            return stateCopy; 
        }
        default: 
            return state;
    }
}

export default profileReducer;

// nope, not today