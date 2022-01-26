import { getGreetingsRequest, getGreetingsSuccess } from './greetingsReducer';

const URL = 'https://evening-beyond-80457.herokuapp.com/v1/greetings.json';

const requestFromApi = () => async (dispatch) => {
  dispatch(getGreetingsRequest());
  console.log('request sent');
  const response = await fetch(URL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const obj = await response.json();
  dispatch(getGreetingsSuccess(obj));
};

export default requestFromApi;
