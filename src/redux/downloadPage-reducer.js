let ADD_NEW_FILE = 'ADD-NEW-FILE';





const downloadPageReducer = (state = null, action) => {

    // Заглушка
    console.log("action is", action);
    switch(action.which) {
        case ADD_NEW_FILE:
//            let newFile = {
//
//            };
            return {
                ...state,
                newFile: action.file
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