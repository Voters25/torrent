import React from 'react';
import classes from './LogPage.module.css';
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
        <div className={classes.logInWripper}>
            <form id="LogIn" className={classes.logInForm}>
                <p>Log In</p>
                <br />
                <input className={classes.gmail} type="text" name="Gmail" placeholder="Email" ref={this.newGmailElement} onChange={this.onGmailChange} value={this.props.propsGmail} />
                <br />
                <input className={classes.password} type="password" name="Password" placeholder="Password" ref={this.newPasswordElement} onChange={this.onPasswordChange} value={this.props.propsPassword} />
                <br />
                <button onClick={this.onSendLogInForm} type="button" >Log In</button>
                <br />
                <NavLink to='registration' className={classes.reg} >Registration</NavLink>
            </form>
        </div>
    )
    }
}




export default LogPage;


//<input type="password" name="Password" ref={this.newPasswordElement} onChange={this.onPasswordChange} value={this.props.propsPassword} />
