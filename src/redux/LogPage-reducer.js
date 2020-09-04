import history from "../history";
import { succesStatus, errorStatus } from "./RequestsStatus-reducer";
import { zeroingTorrentList } from "./list-reducer";
import { zeroingTorrentStatus, changeFalseZipStatus } from "./downloadProgress-reducer";
import { zeroingMagnetURL } from "./downloadPage-reducer";

const POST_STARTED = 'GET-STARTED';

const UPDATE_NEW_GMAIL_VALUE = 'UPDATE-NEW-GMAIL-VALUE';
const UPDATE_NEW_PASSWORD_VALUE = 'UPDATE-NEW-PASSWORD-VALUE';

const ADD_FORM_DATA = 'ADD-FORM-DATA';

const PUSH_LOG_IN_INSTATE = 'PUSH-LOG-IN-INSTATE';

const PUSH_NEW_REQUEST_STATUS = 'PUSH-NEW-REQUEST-STATUS';




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
    user: localStorage.getItem('user'),
    errorStatus: true
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
        case PUSH_NEW_REQUEST_STATUS:
            return {
                ...state,
                errorStatus: action.newReqStatus
            }
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
                    // log in

export const postFormData = (form) => {
    return dispatch => {
        dispatch(postFormDataStarted());

        
        let formData = new FormData();
        formData.append('email', form.email);
        formData.append('password', form.password);


        fetch('http://localhost:3000/users/login', {
            method: 'POST',
            credentials: "include",
            body: formData
        }).then(response => response.text())
            .then(result => {
                console.log(result);
                if (result !== "Error.") {
                    dispatch(pushLogInToLocalStorage(result));
                    dispatch(succesStatus());
                    callForwarding();
                } else if (result == "Error.") {
                    // Неверно введённые данные. Вывести ошибку
                    dispatch(errorStatus());
                }
            }).catch(err => {
                console.log(err)
                if (err == "TypeError: Failed to fetch") {
                    // Неверно введённые данные. Вывести ошибку
                    dispatch(errorStatus());
                }
            });
    };
};


const postFormDataStarted = () => ({
    type: POST_STARTED,
});


let pushLogInToLocalStorage = (result) => {
    let user = JSON.parse(result);
    // console.log(user);
    localStorage.setItem('user', user.email);
    return dispatch => {
        dispatch(pushLogInState());
    }
    
}

const callForwarding = () => {
    history.push('/downloadPage');
}


/*===================================================================================*/
                        

let pushLogInState = () => {
    return {
        type: 'PUSH-LOG-IN-INSTATE',
        newUser: localStorage.getItem('user')
    }
}



/*===================================================================================*/
//                                logOut

export const logOutUsers = () => {
    return dispatch => {
        dispatch(logOutStarted());


        fetch('http://localhost:3000/users/logout', {
            credentials: "include"
        })
        .then(res => {
            res.text()
        })
        .then(result => {
            console.log(result);
            dispatch(LogOut());
            dispatch(succesStatus());
            dispatch(zeroingTorrentList());
            dispatch(zeroingMagnetURL());
            dispatch(changeFalseZipStatus());
        }).catch(err => {
            console.log(err)
            if (err == "TypeError: Failed to fetch") {
                // Соединение с сервером не установлено.
                dispatch(errorStatus());
            }
        });
    };
};


const logOutStarted = () => ({
    type: POST_STARTED,
});



let LogOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('infoHash');
    return dispatch => {
        dispatch(removeUserName());
        //dispatch(zeroingTorrentStatus());
    }
}

let removeUserName = () => {
    return {
        type: 'PUSH-LOG-IN-INSTATE',
        newUser: ""
    }
}

/*===================================================================================*/



/*===================================================================================*/
//                                is Login?

export const isLogin = () => {
    return dispatch => {


        fetch('http://localhost:3000/users/isLogin', {
            credentials: "include"
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);

            if (result.email) {
                dispatch(pushLogInToLocalStorage(result));
                dispatch(succesStatus());
                callForwarding();
            } else if (!result.email) {
                dispatch(LogOut());
                dispatch(succesStatus());
                dispatch(zeroingTorrentList());
                dispatch(zeroingMagnetURL());
                dispatch(changeFalseZipStatus());
            }

        }).catch(err => {
            console.log(err)
            if (err == "TypeError: Failed to fetch") {
                dispatch(errorStatus());
            }
        });
    };
};


/*===================================================================================*/















export default LogPageReducer;