import React from 'react';
import { NavLink } from 'react-router-dom';


class LogPage extends React.Component {
    constructor(props) {
        super(props);
    }
    
render() {

    //console.log(this.props.logIn);
    console.log(this.props.formData);

    this.newGmailElement = React.createRef();
    this.newPasswordElement = React.createRef();

    this.onGmailChange = () => {
        let gmail = this.newGmailElement.current.value;
        this.props.updateNewGmailValue(gmail);
    }
    this.onPasswordChange = () => {
        let password = this.newPasswordElement.current.value;
        this.props.updateNewPasswordValue(password);
    }


    //this.send

    this.onSendLogInForm = () => {
        this.props.addLogInForm();
        this.props.sendLogInForm(this.props.formData)
    }


    return (
        <div>
           <p></p>
           <div>
               <form id="LogIn">
                    <input type="text" name="Gmail" ref={this.newGmailElement} onChange={this.onGmailChange} value={this.props.propsGmail} />
                    <br />
                    <input type="password" name="Password" ref={this.newPasswordElement} onChange={this.onPasswordChange} value={this.props.propsPassword} />
                    <button onClick={this.onSendLogInForm} type="button" >Log In</button>
               </form>
               <NavLink to='registration' >Registration</NavLink>
           </div>
        </div>
    )
    }
}




export default LogPage;


//<input type="password" name="Password" ref={this.newPasswordElement} onChange={this.onPasswordChange} value={this.props.propsPassword} />
