import { getGreetingsRequest, getGreetingsSuccess } from "./greetingsReducer"

const URL = 'https://evening-beyond-80457.herokuapp.com/greetings.json'

const requestFromApi = () => (dispatch) => {
    dispatch(getGreetingsRequest())
    fetch(URL)
    .then(response => response.json())
    .then(json => dispatch(getGreetingsSuccess(json)))
    .catch(error => console.log(error));
}

export default requestFromApi;