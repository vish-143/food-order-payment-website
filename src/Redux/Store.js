import { applyMiddleware, createStore } from "redux";
import rootReducer from "./CombineReducer";
import thunk from "redux-thunk";

export const store = createStore(rootReducer , applyMiddleware(thunk));

// import {applyMiddleware, createStore} from "redux";
// import thunk from "redux-thunk";
// import rootReducer from "./CombinedReducer";

//  export const store = createStore(rootReducer , applyMiddleware(thunk));