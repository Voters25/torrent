import Axios from "axios";
//import * as axios from 'axios';

const POST_STARTED = 'GET-STARTED';
const POST_SUCCESS = 'GET-SUCCESS';
const POST_FAILURE = 'GET-FAILURE';


const UPDATE_NEW_GMAIL_VALUE = 'UPDATE-NEW-GMAIL-VALUE';
const UPDATE_NEW_PASSWORD_VALUE = 'UPDATE-NEW-PASSWORD-VALUE';
const UPDATE_NEW_PASSWORD_TWO_VALUE = 'UPDATE-NEW-PASSWORD-TWO-VALUE';

const ADD_FORM_DATA = 'ADD-FORM-DATA';




let initialState = {
    logIn: false,
    /* formData: [
        {gmailValue = '',
        passwordValue = ''}
    ], */
    formData: {},
    gmailValue: '',
    passwordValue: '',
    passwordTwoValue: ''
    
}


const RegistrationPageReducer = (state = initialState, action) => {


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
        case UPDATE_NEW_PASSWORD_TWO_VALUE:
            return {
                ...state,
                passwordTwoValue: action.newPasswordTwo
            };
        case ADD_FORM_DATA:
            let newFormData = {
                email: state.gmailValue,
                password: state.passwordValue,
                password2: state.passwordTwoValue
            }
            return {
                ...state,
                formData: newFormData,
                //formData: [...state.formData, newFormData],
                gmailValue: '',
                passwordValue: '',
                PasswordTwo: ''
            };
        default:
            return state;
    }
    
}



export let updateNewRegGmailValueAC = (gmail) => {
    return {
        type: 'UPDATE-NEW-GMAIL-VALUE',
        newGmail: gmail
    }
}

export let updateNewRegPasswordValueAC = (password) => {
    return {
        type: 'UPDATE-NEW-PASSWORD-VALUE',
        newPassword: password
    }
}

export let updateNewRegPasswordTwoValueAC = (passwordTwo) => {
    return {
        type: 'UPDATE-NEW-PASSWORD-TWO-VALUE',
        newPasswordTwo: passwordTwo
    }
}


export let addNewRegFormDataAC = () => {
    return {
        type: 'ADD-FORM-DATA'
    }
}

/*===================================================================================*/
                    // callback -> Отправка на сервер formData

export const postRegFormData = (form) => {
    return dispatch => {
        dispatch(postFormDataStarted());

        //let formData = new FormData(form);
        //formData.append('registration', form);

        Axios
            .post('http://localhost:80/users/register',
                form
                )
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
                        



export default RegistrationPageReducer;