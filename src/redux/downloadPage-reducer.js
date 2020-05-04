import { createStore } from "redux";




const downloadPageReducer = (state = null, action) => {

    // Заглушка
    console.log("action is", action);
    switch(action.which) {
        case 'recent':
        case 'alltime':
            return action.which;
            break;
        default:
            return state;
    }

    return state;


}




export default downloadPageReducer;