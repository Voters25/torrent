import Axios from "axios";
//import * as axios from 'axios';

const GET_STARTED = 'GET-STARTED';
const GET_SUCCESS = 'GET-SUCCESS';
const GET_FAILURE = 'GET-FAILURE';
const PUSH_LIST_INSTATE = 'PUSH-LIST-INSTATE';


// ТУТ ВСЁ ПЕРЕЛОПАТИТЬ

let initialState = {
    downloadFile: []    
}


const downloadProgressReducer = (state = initialState, action) => {


    switch(action.type) {
        case PUSH_LIST_INSTATE:
            /* let torrentList = {
                id: this.newList.id,
                name: this.newList.name,
                size: this.newList.size,
                date: this.newList.date
            }; */
            return {
                ...state,
                torrentsList: action.newList
            };
        default:
            return state;
    }
    
}


/*===================================================================================*/
                            // WebSocket

export const getProgress = () => {

    let socket = new WebSocket("ws://localhost:3000");

    socket.onopen = () => {
        console.log("Socket пашет");
    }
    socket.onmessage = (event) => {
        //this.data = event.data;
    }
}



/*===================================================================================*/

/* export const getProgress = () => {
    return dispatch => {
        dispatch(getListStarted());

        Axios
            .get('https://my-json-server.typicode.com/Voters25/TorrentsTestList/torrents')
            .then(res => {
                dispatch(getSuccess(res.data))
                console.log(res);
                dispatch(pushListInState(res))
            })
            .catch(err => {
                dispatch(getFailure(err.message))
                console.log(err);
            })

    }
}

const getListStarted = () => ({
    type: GET_STARTED
});

const getSuccess = () => ({
    type: GET_SUCCESS,
});

const getFailure = error => ({
    type: GET_FAILURE,
    payload: {
        error
    }
});
 */

/*===================================================================================*/



let pushListInState = (res) => {
    return {
        type: 'PUSH-LIST-INSTATE',
        newList: res.data
    }
}




export default downloadProgressReducer;