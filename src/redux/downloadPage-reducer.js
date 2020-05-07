let ADD_NEW_MAGNET = 'ADD-NEW-MAGNET';
let ADD_NEW_FILE = 'ADD-NEW-FILE';



let initialState = {
    newTorrentFile: [
        {}
    ],
    newMagnetUrl: ""
}


const downloadPageReducer = (state = initialState, action) => {

    // Заглушка
    
    /* let stateCopy = {
        ...state
    }; */

    switch(action.which) {
        case ADD_NEW_FILE:
            /* return {
                //...state,
                //newTorrentFile: [...state, file];
                stateCopy.newTorrentFile.
                //newTorrentFile: action.newFile
            } */
            return {
                ...state,
                newTorrentFile: action.newFile
            }
        case ADD_NEW_MAGNET:
            return {
                ...state,
                newMagnetUrl: action.newMagnet
            }
        default:
            return state;
    }
    
}



export let addNewMagnetAC = (magnet) => {
    return {
        type: 'ADD-NEW-MAGNET',
        newMagnet: magnet
    }
}

export let addNewFileAC = (file) => {
    return {
        type: 'ADD-NEW-FILE',
        newFile: file
    }
}



export default downloadPageReducer;