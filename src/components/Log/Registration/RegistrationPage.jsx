import React from 'react';
import classes from './RegistrationPage.module.css';


class RegistrationPage extends React.Component {
    constructor(props) {
        super(props);
    }
    
render() {


    console.log(this.props.formData);

    this.newGmailElement = React.createRef();
    this.newPasswordElement = React.createRef();
    this.newPasswordTwoElement = React.createRef();

    this.onGmailChange = () => {
        let gmail = this.newGmailElement.current.value;
        this.props.updateNewGmailValue(gmail);
    }
    this.onPasswordChange = () => {
        let password = this.newPasswordElement.current.value;
        this.props.updateNewPasswordValue(password);
    }
    this.onPasswordTwoChange = () => {
        let passwordTwo = this.newPasswordTwoElement.current.value;
        this.props.updateNewPasswordTwoValue(passwordTwo);
    }

    

    this.onSendRegForm = async () => {
        await this.props.addRegInForm();
        console.log(this.props.checkPassword);

        if (this.props.checkPassword == this.props.checkPasswordTwo) {
            this.props.sendRegInForm(this.props.formData);
        } else {
            console.log('Несостыковочка вышла');
            // ВВЕДЕНЫ НЕКОРРЕКТНЫЕ ДАННЫЕ
        }

    }


    let regFormFailureValidation = () => {
        return (
            <form id="Reg" className={classes.regForm}>
                <p className={classes.Registration}>Registration</p>
                <br />
                <input type="text" name="Gmail" placeholder="  Email" className={classes.logFailure} ref={this.newGmailElement} onChange={this.onGmailChange} value={this.props.propsGmail} />
                <br />
                <input type="password" name="Password" placeholder="  Password" className={classes.regFailure} ref={this.newPasswordElement} onChange={this.onPasswordChange} value={this.props.propsPassword} />
                <br />
                <input type="password" name="PasswordTwo" placeholder="  Check password" className={classes.regFailure} ref={this.newPasswordTwoElement} onChange={this.onPasswordTwoChange} value={this.props.propsPasswordTwo} />
                <br />
                <button className={classes.buttonReg} onClick={this.onSendRegForm} type="button" >Registration</button>
            </form>
        )
    }




    return (
        <div className={classes.regWripper}>
            {this.props.validation ?
            <form id="Reg" className={classes.regForm}>
                <p className={classes.Registration}>Registration</p>
                <br />
                <input type="text" name="Gmail" placeholder="  Email" className={classes.gmail} ref={this.newGmailElement} onChange={this.onGmailChange} value={this.props.propsGmail} />
                <br />
                <input type="password" name="Password" placeholder="  Password" className={classes.password} ref={this.newPasswordElement} onChange={this.onPasswordChange} value={this.props.propsPassword} />
                <br />
                <input type="password" name="PasswordTwo" placeholder="  Check password" className={classes.password} ref={this.newPasswordTwoElement} onChange={this.onPasswordTwoChange} value={this.props.propsPasswordTwo} />
                <br />
                <button className={classes.buttonReg} onClick={this.onSendRegForm} type="button" >Registration</button>
            </form>
            :
            regFormFailureValidation()
            }
        </div>
    )
    }
}
// ref={this.newGmailElement} onChange={this.onGmailChange} value={this.props.propsGmail}
// ref={this.newPasswordElement} onChange={this.onPasswordChange} value={this.props.propsPassword}



export default RegistrationPage;


//<input type="password" name="Password" ref={this.newPasswordElement} onChange={this.onPasswordChange} value={this.props.propsPassword} />
