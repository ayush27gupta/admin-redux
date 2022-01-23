import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import studentReducer from "./students/reducers/studentReducer";

const store = createStore(studentReducer, composeWithDevTools());

export default store;
