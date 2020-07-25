import history from "../history";

import { zeroingMagnetURL, callForwarding } from "./downloadPage-reducer"


const GET_STARTED = 'GET-STARTED';
const GET_SUCCESS = 'GET-SUCCESS';
const GET_FAILURE = 'GET-FAILURE';

const CHANGE_FILES_INFO_BUTTON_STATUS = 'CHANGE-FILES-INFO-BUTTON-STATUS';

const GET_TORRENT_STATUS = 'GET-TORRENT-STATUS';

const CHANGE_ZIP_STATUS = 'CHANGE-ZIP-STATUS';


let initialState = {
    torrentStatus: [],
    FilesInfoButton: true,
    zipStatus: false
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
            };
        case CHANGE_ZIP_STATUS:
            return {
                ...state,
                zipStatus: action.newZipStatus
            }
        default:
            return state;
    }
    
}


/*===================================================================================*/
                            // WebSocket


export let getProgress = (infoHash) => {
    return dispatch => {
        
        let socket = new WebSocket(`ws://localhost:3000?id=${infoHash}`); // динамически подставлять айди торрента

        
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
                    // Создать архив
export const createZip = () => {
    return dispatch => {

        let id = localStorage.getItem('infoHash');

        fetch(`http://localhost:3000/zip/${id}`, {
            credentials: "include"
        }).then(responce => responce.text())
        .then(result => {
            console.log(result);
            //------

            if (result == 'file ready') {
                dispatch(changeTrueZipStatus());
            } else if (result == 'file not ready') {
                dispatch(changeFalseZipStatus());
            } else if (result == 'Error: this file not supported') {
                console.log('Error');
                dispatch(changeFalseZipStatus());
            }


        })

    }
}






/*===================================================================================*/
                    // callback -> Отправка на сервер formData

export const stopDownload = (id) => {
    return dispatch => {


        let formData = new FormData();
        formData.append('id', localStorage.getItem('infoHash'));

        fetch('http://localhost:3000/cancel', {
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

export let changeTrueZipStatus = () => {
    return {
        type: 'CHANGE-ZIP-STATUS',
        newZipStatus: true
    }
}
export let changeFalseZipStatus = () => {
    return {
        type: 'CHANGE-ZIP-STATUS',
        newZipStatus: false
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