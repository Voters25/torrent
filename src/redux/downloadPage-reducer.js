import Axios from "axios";
import history from "../history";
//import * as axios from 'axios';

const UPDATE_NEW_MAGNET = 'UPDATE-NEW-MAGNET';
const UPDATE_NEW_FILE = 'UPDATE-NEW-FILE';
const INCORRECT_FILE = 'INCORRECT-FILE';

const GET_STARTED = 'GET-STARTED';
const GET_SUCCESS = 'GET-SUCCESS';
const GET_FAILURE = 'GET-FAILURE';
const POST_STARTED = 'POST-STARTED';
const POST_SUCCESS = 'POST-SUCCESS';
const POST_FAILURE = 'POST-FAILURE';



let initialState = {
    torrentsList: [],
    newTorrentFile: [
    ],
    newMagnetUrl: "",
    /* test: [
        {test: '1'},
        {test: '2'}
    ] */
    buttonActive: false,
    redirectToDownloadProgress: false
}


const downloadPageReducer = (state = initialState, action) => {


    switch(action.type) {
        case INCORRECT_FILE:
            return {
                ...state,
                newTorrentFile: action.incFile,
                buttonActive: action.button
            };
        case UPDATE_NEW_FILE:
            return {
                ...state,
                newTorrentFile: action.newFile,
                buttonActive: action.button
            };
        case UPDATE_NEW_MAGNET:
            return {
                ...state,
                newMagnetUrl: action.newMagnet
            };

        default:
            return state;
    }
    
}

/*===================================================================================*/
                        // callback -> Отправка на сервер magnetUrl

export const postMagnet = (magnet) => {
    return dispatch => {
        dispatch(postMagnetStarted());

        Axios
            .post('http://localhost:80/magnet', {
                magnet: magnet,                
            })
            .then(res => {
                dispatch(postMagnetSuccess(res.data));
                dispatch(callForwarding())
            })
            .catch(err => {
                dispatch(postMagnetFailure(err.message));
                console.log(err);
                // тестовая, пока серва нету *****************************
                //history.push('/downloadProgress') //******************************************
            });
    };
};


const postMagnetStarted = () => ({
    type: POST_STARTED,
});

const postMagnetSuccess = (sendMagnet) => ({
    type: POST_SUCCESS,
    payload: {
        ...sendMagnet
    }
});

const callForwarding = () => {
    history.push('/downloadProgress');
}

const postMagnetFailure = error => ({
    type: POST_FAILURE,
    payload: {
        error
    }
}); 

/*===================================================================================*/


/*===================================================================================*/
                // callback -> Отправка на сервер file

export const postFile = (sendFile) => {
    return dispatch => {
        dispatch(postFileStarted());
                        

        let formData = new FormData()
        formData.append('torrent', sendFile);

        Axios
            .post('http://localhost:80/torrent', {
                formData,                
            })
            .then(res => {
                dispatch(postFileSuccess(res.data));
                console.log(res);
                // Переадресация
                history.push('/downloadProgress')
            })
            .catch(err => {
                dispatch(postFileFailure(err.message));
                console.log(err);
            });
    };
};


const postFileStarted = () => ({
    type: POST_STARTED,
});

const postFileSuccess = (sendFile) => ({
    type: POST_SUCCESS,
    payload: {
        ...sendFile
    }
});

const postFileFailure = error => ({
    type: POST_FAILURE,
    payload: {
        error
    }
}); 


/*===================================================================================*/



export let updateNewMagnetAC = (magnet) => {
    return {
        type: 'UPDATE-NEW-MAGNET',
        newMagnet: magnet
    }
}

export let updateNewFileAC = (file) => {
    return {
        type: 'UPDATE-NEW-FILE',
        newFile: file,
        button: true
    }
}

export let incorrectFileAC = (button) => {
    return {
        type: 'INCORRECT-FILE',
        incFile: {},
        button: button
    }
}






export default downloadPageReducer;