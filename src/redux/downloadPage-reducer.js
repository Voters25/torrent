let ADD_NEW_FILE = 'ADD-NEW-FILE';


let initialState = {
    //fileData: [],
    //newTorrentFile: {}
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
        default:
            return state;
    }
    
}


export let addNewFileAC = (file) => {
    return {
        type: 'ADD-NEW-FILE',
        newFile: file
    }
}


export default downloadPageReducer;