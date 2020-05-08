let UPDATE_NEW_MAGNET = 'UPDATE-NEW-MAGNET';
let UPDATE_NEW_FILE = 'UPDATE-NEW-FILE';



let initialState = {
    newTorrentFile: [
        {}
    ],
    newMagnetUrl: "",
    test: [
        {test: '1'},
        {test: '2'}
    ]
}


const downloadPageReducer = (state = initialState, action) => {

    
    /* let stateCopy = {
        ...state
    }; */

    switch(action.which) {
        case UPDATE_NEW_FILE:
            return {
                // Отрисовка, **************объекта в state ещё нету**************
                ...state,   // Срабатывает только для отрисовки value?
                newTorrentFile: action.newFile

                // Допиши Пуш:  для закидывания файла в state и псоледующим взаимодействием.
                // Ведь то, что сейчас есть, это копирование стэйта для отрисовки value.
                // Поэтому в state ещё нету данных. Ты не запушил их туда!
                //........
            };
        case UPDATE_NEW_MAGNET:
            return {
                // Отрисовка, **************объекта в state ещё нету**************
                ...state,   // Срабатывает только для отрисовки value?
                newMagnetUrl: action.newMagnet

                // Допиши Пуш:  для закидывания файла в state и псоледующим взаимодействием.
                // Ведь то, что сейчас есть, это копирование стэйта для отрисовки value.
                // Поэтому в state ещё нету данных. Ты не запушил их туда!
                //........
            };
        default:
            return state;
    }
    
}



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