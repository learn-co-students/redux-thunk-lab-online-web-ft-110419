import { createStore, applyMiddleware } from "redux";
import catsReducer from "./reducers/catsReducer";
import thunk from "redux-thunk";

export const store = createStore(catsReducer, applyMiddleware(thunk));
