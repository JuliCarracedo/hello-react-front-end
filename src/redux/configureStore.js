import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import greetingsReducer from "./greetings/greetingsReducer";

const reducer = combineReducers({
    greetings: greetingsReducer,
})

const store = createStore(reducer, applyMiddleware(thunk));

export default store