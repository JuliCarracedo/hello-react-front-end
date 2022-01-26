// Constants
const GET_GREETINGS_REQUEST = 'redux/greetings/greetingsReducer/GET_GREETINGS_REQUEST';
const GET_GREETINGS_SUCCESS= 'redux/greetings/greetingsReducer/GET_GREETINGS_SUCCESS';

// Actions

export const getGreetingsRequest = () => ({
    type: GET_GREETINGS_REQUEST
})

export const getGreetingsSuccess = (payload) => ({
    type: GET_GREETINGS_SUCCESS,
    payload
})

// Reducer

const greetingsReducer = (state = {}, action) =>{
    switch(action.type){
        case GET_GREETINGS_REQUEST: return {...state, loading: true};
        case GET_GREETINGS_SUCCESS: return {...state, loading: false, list: action.payload.greetings};
        default: return state
    }
}

export default greetingsReducer;