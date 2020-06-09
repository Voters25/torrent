import { connect } from 'react-redux';
import RegistrationPage from './RegistrationPage.jsx';
import { updateNewRegPasswordValueAC, updateNewRegGmailValueAC, addNewRegFormDataAC, postRegFormData, updateNewRegPasswordTwoValueAC } from '../../../redux/RegistrationPage-reducer.js';





const mapStateToProps = (state) => {
    return {
        logIn: state.RegistrationPage.logIn,

        propsGmail: state.RegistrationPage.gmailValue,
        propsPassword: state.RegistrationPage.passwordValue,
        propsPasswordTwo: state.RegistrationPage.newPasswordTwo,


        checkPassword: state.RegistrationPage.formData.password,
        checkPasswordTwo: state.RegistrationPage.formData.password2,

        formData: state.RegistrationPage.formData
    }
}


const mapDispatchToProps = (dispatch) => {
    return {

        updateNewGmailValue: (gmail) => {
            let action = updateNewRegGmailValueAC(gmail);
            dispatch(action);
        },
        updateNewPasswordValue: (password) => {
            let action = updateNewRegPasswordValueAC(password);
            dispatch(action);
        },
        updateNewPasswordTwoValue: (passwordTwo) => {
            let action = updateNewRegPasswordTwoValueAC(passwordTwo);
            dispatch(action);
        },

        addRegInForm: () => {
            let action = addNewRegFormDataAC();
            dispatch(action);
        },

        sendRegInForm: (formData) => {
            dispatch(postRegFormData(formData))
        }

    }

}


const RegistrationPageContainer = connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);

export default RegistrationPageContainer;