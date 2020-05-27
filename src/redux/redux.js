import { createStore, combineReducers, applyMiddleware } from "redux";
import downloadPageReducer from "./downloadPage-reducer";
import listReducer from "./list-reducer";
import thunk from "redux-thunk";




let reducers = combineReducers({
    downloadPage: downloadPageReducer,  // downloadPage передавай в props. Это *state* редьюсера (state.downloadPage)
    list: listReducer
});


let store = createStore(reducers, applyMiddleware(thunk));







window.store = store;

export default store;