import history from "../history";

import { zeroingMagnetURL } from "./downloadPage-reducer"


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
        
        let socket = new WebSocket(`ws://easywebtor.herokuapp.com?id=${infoHash}`); // динамически подставлять айди торрента

        
        socket.onopen = () => {
            console.log("Socket пашет");
        }
        socket.onmessage = (event) => {
            /* console.log(event);
            if (event.data == null) {
                console.log(event);
            } else {
                dispatch(getTorrentStatus(JSON.parse(event.data)));
            } */
            
            //JSON.parse(event.data);
            //console.log(JSON.parse(event.data));
            dispatch(getTorrentStatus(JSON.parse(event.data)));
        }
        socket.onerror = (error) => {
            console.log(error);
        }
        socket.onclose = () => {
            console.log("Лавка сокетов прикрылась");
        }
    }
}



/*===================================================================================*/
                    // callback -> Отправка на сервер formData

export const stopDownload = (id) => {
    return dispatch => {


        let formData = new FormData();
        formData.append('id', localStorage.getItem('infoHash'));

        fetch('https://easywebtor.herokuapp.com/cancel', {
            method: 'POST',
            credentials: "include",
            body: formData
            //body: localStorage.getItem('infoHash')
        }).then(response => response.text())
            .then(result => {
                console.log(result);
                removeInfoHashLocalStorage();
                dispatch(zeroingTorrentStatus());         //   НЕ ПАШЕТ (((((
                dispatch(zeroingMagnetURL());   //   НЕ ОБНУЛЯЕТСЯ И НЕ ЗАТИРАЕТСЯ....
                callForwardingList();
            }).catch(err => {
                console.log(err);
            });
    };
};







let getTorrentStatus = (data) => {
    return {
        type: 'GET-TORRENT-STATUS',
        newStatus: data         // data.files
    }
}



export let setInfoHashToStorage = (infoHash) => {
    localStorage.setItem('infoHash', infoHash);
}
export const removeInfoHashLocalStorage = () => {
    localStorage.removeItem('infoHash');
}

export let ChangeFilesInfoButton = () => {
    return {
        type: 'CHANGE-FILES-INFO-BUTTON-STATUS',
        newButtonStatus: true
    }
}

export const zeroingTorrentStatus = () => {
    return {
        type: 'GET-TORRENT-STATUS',
        newStatus: []
    }
}

export const callForwardingList = () => {
    history.push('/list');
}

const changeDownloadProgress = () => {
    //history.push('/downloadProgress');
    //removeInfoHashLocalStorage();
    //zeroingTorrentStatus();
}

export default downloadProgressReducer;