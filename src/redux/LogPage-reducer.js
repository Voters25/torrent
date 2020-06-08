import Axios from "axios";
//import * as axios from 'axios';

const POST_STARTED = 'GET-STARTED';
const POST_SUCCESS = 'GET-SUCCESS';
const POST_FAILURE = 'GET-FAILURE';


const UPDATE_NEW_GMAIL_VALUE = 'UPDATE-NEW-GMAIL-VALUE';
const UPDATE_NEW_PASSWORD_VALUE = 'UPDATE-NEW-PASSWORD-VALUE';

const ADD_FORM_DATA = 'ADD-FORM-DATA';




let initialState = {
    logIn: false,
    /* formData: [
        {gmailValue = '',
        passwordValue = ''}
    ], */
    formData: [],
    gmailValue: '',
    passwordValue: ''
    
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
                gmail: state.gmailValue,
                password: state.passwordValue
            }
            return {
                ...state,
                formData: [...state.formData, newFormData],
                gmailValue: '',
                passwordValue: '',
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

export const postFormData = (formData) => {
    return dispatch => {
        dispatch(postFormDataStarted());

        Axios
            .post('http://localhost:80/logIn', {
                formData: formData,
            })
            .then(res => {
                dispatch(postFormDataSuccess(res.data));
                //  dispatch(callForwarding())
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

const postFormDataSuccess = (formData) => ({
    type: POST_SUCCESS,
    payload: {
        ...formData
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
                        



export default LogPageReducer;