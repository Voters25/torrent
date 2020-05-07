import { createStore, combineReducers } from "redux";
import downloadPageReducer from "./downloadPage-reducer";




let reducers = combineReducers({
    downloadPage: downloadPageReducer  // downloadPage передавай в props. Это *state* редьюсера (state.downloadPage)
});


let store = createStore(reducers);








window.store = window;

export default store;