import Axios from "axios";


const UPDATE_NEW_MAGNET = 'UPDATE-NEW-MAGNET';
const UPDATE_NEW_FILE = 'UPDATE-NEW-FILE';

const POST_STARTED = 'POST-STARTED';
const POST_SUCCESS = 'POST-SUCCESS';
const POST_FAILURE = 'POST-FAILURE';





let initialState = {
    newTorrentFile: [
    ],
    newMagnetUrl: ""
    /* test: [
        {test: '1'},
        {test: '2'}
    ] */
}


const downloadPageReducer = (state = initialState, action) => {


    switch(action.type) {
        case UPDATE_NEW_FILE:
            
            return {
                ...state,
                newTorrentFile: action.newFile
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
            .post('http://localhost:3000/magnet', {
                magnet: magnet,                
            })
            .then(res => {
                dispatch(postMagnetSuccess(res.data));
            })
            .catch(err => {
                dispatch(postMagnetFailure(err.message));
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
            .post('http://localhost:3000/torrent', {
                formData,                
            })
            .then(res => {
                dispatch(postFileSuccess(res.data));
            })
            .catch(err => {
                dispatch(postFileFailure(err.message));
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
        newFile: file
    }
}




export default downloadPageReducer;