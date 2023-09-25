import { createStore,applyMiddleware } from "redux";
import counterReducer from './reducer/counterReducer';
import thunk from "redux-thunk";
import reducers from "./reducer/index";
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
const enhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

//const store=createStore(reducers,enhancer(applyMiddleware(thunk)));
const store=configureStore({
    reducer:{
        counter:counterSlice
    }
})
export default store;



























/*import { createStore } from "redux";
import counterReducer from './reducer/counterReducer';
const store=createStore(counterReducer);

export default store;*/