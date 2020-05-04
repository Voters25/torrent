import { createStore, combineReducers } from "redux";
import downloadPageReducer from "./downloadPage-reducer";




let reducers = combineReducers({
    downloadPager: downloadPageReducer
});


let store = createStore(reducers);








window.store = window;

export default store;