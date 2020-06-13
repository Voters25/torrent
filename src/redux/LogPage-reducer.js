import Axios from "axios";
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
                //  dispatch(callForwarding())
                console.log(res.data);
                dispatch(pushLogInState(res.data));
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

/* const callForwarding = () => {
    history.push('/downloadProgress');
} */

const postFormDataFailure = error => ({
    type: POST_FAILURE,
    payload: {
        error
    }
});

/*===================================================================================*/
                        

let pushLogInState = (user) => {
    return {
        type: 'PUSH-LOG-IN-INSTATE',
        newUser: user
    }
}




export default LogPageReducer;