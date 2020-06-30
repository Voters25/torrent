const PUSH_NEW_REQUEST_STATUS = 'PUSH-NEW-REQUEST-STATUS';


let initialState = {
    errorStatus: true
}

const RequestsStatusReducer = (state = initialState, action) => {

    switch(action.type) {
        case PUSH_NEW_REQUEST_STATUS:
            return {
                ...state,
                errorStatus: action.newReqStatus
            }
        default:
            return state;
    }
    
}


export const errorStatus = () => {
    return {
        type: 'PUSH-NEW-REQUEST-STATUS',
        newReqStatus: false
    }
}

export const succesStatus = () => {
    return {
        type: 'PUSH-NEW-REQUEST-STATUS',
        newReqStatus: true
    }
}

export default RequestsStatusReducer;