import {applyMiddleware, combineReducers, compose, createStore} from "redux";

import authReducer from "./auth-reducer";
import {reducer as formReducer} from 'redux-form'
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    auth: authReducer,
    form: formReducer,

});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));



export default store;


