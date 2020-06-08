import Axios from "axios";
//import * as axios from 'axios';

const GET_STARTED = 'GET-STARTED';
const GET_SUCCESS = 'GET-SUCCESS';
const GET_FAILURE = 'GET-FAILURE';

const CHANGE_FILES_INFO_BUTTON_STATUS = 'CHANGE-FILES-INFO-BUTTON-STATUS';

const GET_TORRENT_STATUS = 'GET-TORRENT-STATUS';


let initialState = {
    torrentStatus: [],
    FilesInfoButton: true
}

// В пост запросе parseTorrent(магнет) -> infoHash  перекинуть его сюда.


const downloadProgressReducer = (state = initialState, action) => {


    switch(action.type) {
        case GET_TORRENT_STATUS:
            return {
                ...state,
                torrentStatus: action.newStatus
            };
        case CHANGE_FILES_INFO_BUTTON_STATUS:
            return {
                ...state,
                FilesInfoButton: action.newButtonStatus
            }
        default:
            return state;
    }
    
}


/*===================================================================================*/
                            // WebSocket


export let getProgress = (infoHash) => {
    return dispatch => {
        
        let socket = new WebSocket(`ws://localhost?id=${infoHash}`); // динамически подставлять айди торрента

        
        socket.onopen = () => {
            console.log("Socket пашет");
        }
        socket.onmessage = (event) => {
            
            //JSON.parse(event.data);
            //console.log(JSON.parse(event.data));
            dispatch(getTorrentStatus(JSON.parse(event.data)));
        }
        socket.onclose = () => {
            console.log("Лавка сокетов прикрылась");
        }
    }
}



let getTorrentStatus = (data) => {
    return {
        type: 'GET-TORRENT-STATUS',
        newStatus: data         // data.files
    }
}

export let ChangeFilesInfoButton = () => {
    return {
        type: 'CHANGE-FILES-INFO-BUTTON-STATUS',
        newButtonStatus: true
    }
}




export default downloadProgressReducer;