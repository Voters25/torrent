import Axios from "axios";
//import * as axios from 'axios';

const GET_STARTED = 'GET-STARTED';
const GET_SUCCESS = 'GET-SUCCESS';
const GET_FAILURE = 'GET-FAILURE';
const PUSH_LIST_INSTATE = 'PUSH-LIST-INSTATE';

const ADD_HASH = 'ADD-HASH';

const GET_TORRENT_STATUS = 'GET-TORRENT-STATUS';


let initialState = {
    downloadFile: [],
    magnetInfoHash: '',
    torrentStatus: 0
}

// В пост запросе parseTorrent(магнет) -> infoHash  перекинуть его сюда.


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
        case ADD_HASH:
            return {
                ...state,
                magnetInfoHash: action.Hash
            };
        case GET_TORRENT_STATUS:
            return {
                ...state,
                torrentStatus: action.newStatus
            }
        default:
            return state;
    }
    
}


/*===================================================================================*/
                            // WebSocket

/* let initialSocket = () => {
    let socket = new WebSocket(`ws://localhost?id=${this.magnetInfoHash}`);
} */

export let getProgress = () => {
    return dispatch => {

        let socket = new WebSocket(`ws://localhost?id=${this.magnetInfoHash}`); // динамически подставлять айди торрента

        /* socket.onopen = () => {
            console.log("Socket пашет");
        } */
        socket.onmessage = (event) => {
            //this.data = event.data;
            dispatch(getTorrentStatus(event.data))
        }
    }
}


export let addHash = (addHash) => {
    return {
        type: 'ADD-HASH',
        Hash: addHash
    }
}

let getTorrentStatus = (data) => {
    return {
        type: 'GET-TORRENT-STATUS',
        newStatus: data
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