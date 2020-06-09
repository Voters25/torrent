import React from 'react';


class RegistrationPage extends React.Component {
    constructor(props) {
        super(props);
    }
    
render() {

    //console.log(this.props.logIn);
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


    //console.log(this.props.checkPassword);
    

    this.onSendRegForm = async () => {
        await this.props.addRegInForm();

        //this.props.checkPassword
        //this.props.checkPasswordTwo
        console.log(this.props.checkPassword);

        if (this.props.checkPassword == this.props.checkPasswordTwo) {
            this.props.sendRegInForm(this.props.formData);
        } else {
            console.log('Несостыковочка вышла');
        }

    }


    return (
        <div>
           <p></p>
           <div>
               <form id="LogIn">
                    <input type="text" name="Gmail" ref={this.newGmailElement} onChange={this.onGmailChange} value={this.props.propsGmail} />
                    <br />
                    <input type="password" name="Password" ref={this.newPasswordElement} onChange={this.onPasswordChange} value={this.props.propsPassword} />
                    <br />
                    <input type="password" name="PasswordTwo" ref={this.newPasswordTwoElement} onChange={this.onPasswordTwoChange} value={this.props.propsPasswordTwo} />
                    <button onClick={this.onSendRegForm} type="button" >Registration</button>
               </form>
           </div>
        </div>
    )
    }
}
// ref={this.newGmailElement} onChange={this.onGmailChange} value={this.props.propsGmail}
// ref={this.newPasswordElement} onChange={this.onPasswordChange} value={this.props.propsPassword}



export default RegistrationPage;


//<input type="password" name="Password" ref={this.newPasswordElement} onChange={this.onPasswordChange} value={this.props.propsPassword} />
