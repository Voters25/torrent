import Axios from "axios";


const UPDATE_NEW_MAGNET = 'UPDATE-NEW-MAGNET';
const UPDATE_NEW_FILE = 'UPDATE-NEW-FILE';

const POST_STARTED = 'POST-STARTED';
const POST_SUCCESS = 'POST-SUCCESS';
const POST_FAILURE = 'POST-FAILURE';





let initialState = {
    newTorrentFile: [
        //{ newTorrentFile } Обратиться к объекту и перез. его данные
    ],
    newMagnetUrl: "65656"
    /* test: [
        {test: '1'},
        {test: '2'}
    ] */
}


const downloadPageReducer = (state = initialState, action) => {

    console.log('newTorrentFile:' + state.newTorrentFile[0]);

    /* let stateCopy = {
        ...state
    }; */

    switch(action.type) {
        case UPDATE_NEW_FILE:
            
            return {
                // Отрисовка, **************объекта в state ещё нету**************
                ...state,
                //newTorrentFile: [...state.newTorrentFile, action.newFile]
                newTorrentFile: action.newFile
            };
        /* case ADD_NEW_FILE:
            return {
                ...state,
                {
                    newTorrentFile: [...state.newTorrentFile, action.newFile]
                }
            }; */
        case UPDATE_NEW_MAGNET:
            return {
                // Отрисовка, **************объекта в state ещё нету**************
                ...state,   // Срабатывает только для отрисовки value?
                newMagnetUrl: action.newMagnet // ЭТО РАБОТАЕТ!

                // Допиши Пуш:  для закидывания файла в state и псоледующим взаимодействием.
                // Ведь то, что сейчас есть, это копирование стэйта для отрисовки value.
                // Поэтому в state ещё нету данных. Ты не запушил их туда!
                //........
            };
       

        default:
            return state;
    }
    
}



/*===================================================================================*/
                        // callback -> Отправка на сервер magnetUrl

export const postMagnet = (sendMagnet) => {
    return dispatch => {
        dispatch(postMagnetStarted());

        Axios
            .post('https://github.com/Voters25/React_Study', {
                sendMagnet,                
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
                        
        Axios
            .post('https://github.com/Voters25/React_Study', {
                sendFile,                
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