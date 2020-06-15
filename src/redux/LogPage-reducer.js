import Axios from "axios";
import history from "../history";
//import * as axios from 'axios';

const POST_STARTED = 'GET-STARTED';
const POST_SUCCESS = 'GET-SUCCESS';
const POST_FAILURE = 'GET-FAILURE';


const UPDATE_NEW_GMAIL_VALUE = 'UPDATE-NEW-GMAIL-VALUE';
const UPDATE_NEW_PASSWORD_VALUE = 'UPDATE-NEW-PASSWORD-VALUE';

const ADD_FORM_DATA = 'ADD-FORM-DATA';

const PUSH_LOG_IN_INSTATE = 'PUSH-LOG-IN-INSTATE';




let initialState = {
    logIn: false,
    /* formData: [
        {gmailValue = '',
        passwordValue = ''}
    ], */
    formData: {},
    gmailValue: '',
    passwordValue: '',

    /* user: '' */
    user: ''
    
}


const LogPageReducer = (state = initialState, action) => {


    switch(action.type) {
        case UPDATE_NEW_GMAIL_VALUE:
            return {
                ...state,
                gmailValue: action.newGmail
            };
        case UPDATE_NEW_PASSWORD_VALUE:
            return {
                ...state,
                passwordValue: action.newPassword
            };
        case ADD_FORM_DATA:
            let newFormData = {
                email: state.gmailValue,
                password: state.passwordValue
            }
            return {
                ...state,
                formData: newFormData,
                gmailValue: '',
                passwordValue: '',
            };
        case PUSH_LOG_IN_INSTATE:
            return {
                ...state,
                user: action.newUser
            };
        default:
            return state;
    }
    
}



export let updateNewGmailValueAC = (gmail) => {
    return {
        type: 'UPDATE-NEW-GMAIL-VALUE',
        newGmail: gmail
    }
}

export let updateNewPasswordValueAC = (password) => {
    return {
        type: 'UPDATE-NEW-PASSWORD-VALUE',
        newPassword: password
    }
}

export let addNewFormDataAC = () => {
    return {
        type: 'ADD-FORM-DATA'
    }
}

/*===================================================================================*/
                    // callback -> Отправка на сервер formData

export const postFormData = (form) => {
    return dispatch => {
        dispatch(postFormDataStarted());

        /* let formData = new FormData();
        formData.append('registration', form); */

        Axios
            .post('http://localhost:80/users/login',
                form
            )
            .then(res => {
                dispatch(postFormDataSuccess(res.data));
                console.log(res.data);
                dispatch(pushLogInToLocalStorage(res.data));
                //dispatch(pushLogInState(res.data));
                dispatch(callForwarding());
            })
            .catch(err => {
                dispatch(postFormDataFailure(err.message));
                console.log(err);
            });
    };
};


const postFormDataStarted = () => ({
    type: POST_STARTED,
});

const postFormDataSuccess = (form) => ({
    type: POST_SUCCESS,
    payload: {
        ...form
    }
});

let pushLogInToLocalStorage = (res) => {
    localStorage.setItem('user', res);
    return dispatch => {
        dispatch(pushLogInState());
    }
    
}

const callForwarding = () => {
    history.push('/downloadPage');
}

const postFormDataFailure = error => ({
    type: POST_FAILURE,
    payload: {
        error
    }
});

/*===================================================================================*/
                        

let pushLogInState = () => {
    return {
        type: 'PUSH-LOG-IN-INSTATE',
        newUser: localStorage.getItem('user')
    }
}


//let userName = localStorage.getItem('user');










/*===================================================================================*/
//                                logOut

export const logOutUsers = () => {
    return dispatch => {
        dispatch(logOutStarted());

        Axios
            .get('http://localhost:80/users/logout')
            .then(res => {
                dispatch(logOutSuccess(res.data));
                console.log(res.data);
                dispatch(LogOut());
                //dispatch(callForwardinglogOut());
            })
            .catch(err => {
                dispatch(postFormDataFailure(err.message));
                console.log(err);
            });
    };
};


const logOutStarted = () => ({
    type: POST_STARTED,
});

const logOutSuccess = (form) => ({
    type: POST_SUCCESS,
    payload: {
        ...form
    }
});

let LogOut = () => {
    localStorage.removeItem('user');
    return dispatch => {
        dispatch(removeUserName());
    }
}

let removeUserName = () => {
    return {
        type: 'PUSH-LOG-IN-INSTATE',
        newUser: ""
    }
}

/* const callForwardinglogOut = () => {
    history.push('/logPage');
} */

const logOutFailure = error => ({
    type: POST_FAILURE,
    payload: {
        error
    }
});

/*===================================================================================*/
















export default LogPageReducer;