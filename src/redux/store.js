import { createStore,applyMiddleware } from "redux";
import counterReducer from './reducer/counterReducer';
import thunk from "redux-thunk";
import reducers from "./reducer/index";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
const enhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

//const store=createStore(reducers,enhancer(applyMiddleware(thunk)));


const store=configureStore({
    reducer:{
        user:userSlice
    }
});

export default store;













/*const store=configureStore({
    reducer:{
        counter:counterSlice
    }
})
export default store;*/



























/*import { createStore } from "redux";
import counterReducer from './reducer/counterReducer';
const store=createStore(counterReducer);

export default store;*/