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
                ...state,   // Срабатывает только для отрисовки value?
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
        dispatch(postStarted());

        Axios
            .post('/magnet', {
                sendMagnet,                
            })
            .then(res => {
                dispatch(postSuccess(res.data));
            })
            .catch(err => {
                dispatch(postFailure(err.message));
            });
    };
};


const postStarted = () => ({
    type: POST_STARTED,
});

const postSuccess = (sendMagnet) => ({
    type: POST_SUCCESS,
    payload: {
        ...sendMagnet
    }
});

const postFailure = error => ({
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