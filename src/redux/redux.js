import { createStore, combineReducers, applyMiddleware } from "redux";
import downloadPageReducer from "./downloadPage-reducer";
import listReducer from "./list-reducer";
import thunk from "redux-thunk";
import downloadProgressReducer from "./downloadProgress-reducer";
import LogPageReducer from "./LogPage-reducer";
import RegistrationPageReducer from "./RegistrationPage-reducer";




let reducers = combineReducers({
    LogPage: LogPageReducer,
    RegistrationPage: RegistrationPageReducer,
    downloadPage: downloadPageReducer,  // downloadPage передавай в props. Это *state* редьюсера (state.downloadPage)
    list: listReducer,
    progressPage: downloadProgressReducer
});


let store = createStore(reducers, applyMiddleware(thunk));







window.store = store;

export default store;