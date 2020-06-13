import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';



let Header = (props) => {

    let userName = props.propsUser;


    return (
        <header className={classes.wripper}>
            <nav>
                <ul className={classes.styleUl}>
                    <li className={classes.logo} ><NavLink to="/" className={classes.logo} >LOGO</NavLink></li>
                    <li className={classes.userName}>{userName}</li>
                    <li><NavLink to="logPage" className={classes.navLink} >log Page</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

/*<form id="sendFile" onSubmit={this.onFileSend}>*/

export default Header;