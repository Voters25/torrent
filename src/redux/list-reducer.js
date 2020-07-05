import history from "../history";


const GET_STARTED = 'GET-STARTED';
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

    }
}
//'https://my-json-server.typicode.com/Voters25/TorrentsTestList/torrents'

const getListStarted = () => ({
    type: GET_STARTED
});



/*===================================================================================*/



/*===================================================================================*/
                    // Удаление из листа (ДОПИЛИТЬ)

export let removeElement = (id) => {

    fetch(`http://localhost:3000/users/remove/${id}`, {
        credentials: "include"
    })
    .then(res => res.text())
    .then(result => {
        console.log(result);
        callForwarding();
    })

}

/*===================================================================================*/


const callForwarding = () => {
    history.push('/');
    history.push('/list');
}


let pushListInState = (result) => {
    return {
        type: 'PUSH-LIST-INSTATE',
        newList: result
    }
}


export const zeroingTorrentList = () => {
    return {
        type: 'PUSH-LIST-INSTATE',
        newList: []
    }
}



export default listReducer;