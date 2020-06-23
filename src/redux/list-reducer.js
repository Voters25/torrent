

const GET_STARTED = 'GET-STARTED';
const GET_SUCCESS = 'GET-SUCCESS';
const GET_FAILURE = 'GET-FAILURE';
const PUSH_LIST_INSTATE = 'PUSH-LIST-INSTATE';




let initialState = {
    torrentsList: []
    // [{date: ..., infoHash: ..., magnet: ..., name: ..., size: ..., id: ..., v: ...}]
}


const listReducer = (state = initialState, action) => {


    switch(action.type) {
        case PUSH_LIST_INSTATE:
            /* let torrentList = {
                id: this.newList.id,
                name: this.newList.name,
                size: this.newList.size,
                date: this.newList.date
            }; */
            return {
                ...state,
                torrentsList: action.newList
            };
        default:
            return state;
    }
    
}



/*===================================================================================*/
                        // Get list

export const getList = () => {
    return dispatch => {
        dispatch(getListStarted());


        fetch('http://localhost:3000/users/torrents', {
            credentials: "include"
        })
        .then(res => res.json())
        .then(result => {
            //console.log(result);
            dispatch(pushListInState(result))
        }).catch(err => console.log(err))

        /* Axios
            .get('http://localhost:3000/users/torrents')
            .then(res => {
                dispatch(getSuccess(res.data))
                console.log(res.data);
                //dispatch(pushListInState(res))
            })
            .catch(err => {
                dispatch(getFailure(err.message))
                console.log(err);
            }) */

    }
}
//'https://my-json-server.typicode.com/Voters25/TorrentsTestList/torrents'

const getListStarted = () => ({
    type: GET_STARTED
});

/* const getSuccess = () => ({
    type: GET_SUCCESS,
    
}); */

const getFailure = error => ({
    type: GET_FAILURE,
    payload: {
        error
    }
});


/*===================================================================================*/



let pushListInState = (result) => {
    return {
        type: 'PUSH-LIST-INSTATE',
        newList: result
    }
}




export default listReducer;