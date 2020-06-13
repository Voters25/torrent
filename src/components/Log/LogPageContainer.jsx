import { connect } from 'react-redux';
import LogPage from './LogPage.jsx';
import { updateNewGmailValueAC, updateNewPasswordValueAC, addNewFormDataAC, postFormData } from '../../redux/LogPage-reducer.js';





const mapStateToProps = (state) => {
    return {
        logIn: state.LogPage.logIn,

        propsGmail: state.LogPage.gmailValue,
        propsPassword: state.LogPage.passwordValue,

        formData: state.LogPage.formData,

        propsUser: state.LogPage.user
    }
}


const mapDispatchToProps = (dispatch) => {
    return {

        updateNewGmailValue: (gmail) => {
            let action = updateNewGmailValueAC(gmail);
            dispatch(action);
        },
        updateNewPasswordValue: (password) => {
            let action = updateNewPasswordValueAC(password);
            dispatch(action);
        },

        addLogInForm: () => {
            let action = addNewFormDataAC();
            dispatch(action);
        },

        sendLogInForm: (formData) => {
            dispatch(postFormData(formData))
        }

    }
        
}


const LogPageContainer = connect(mapStateToProps, mapDispatchToProps)(LogPage);

export default LogPageContainer;