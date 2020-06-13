import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavBar.module.css';
import { cancellationRedirect } from '../../redux/downloadPage-reducer';



let NavBar = (props) => {

    let userName = props.propsUser;


    return (
        <nav className={classes.wripper}>
            <nav className={classes.navNavBar}>
                <ul className={classes.styleUl}>
                    
                    <li className={classes.styleLi}><NavLink to="downloadPage" className={classes.navLink} >Download File</NavLink></li>
                    <li className={classes.styleLi}><NavLink to="downloadProgress" className={classes.navLink} >Download Progress</NavLink></li>
                    <li className={classes.styleLi}><NavLink to="list" className={classes.navLink} >List</NavLink></li>
                </ul>
            </nav>
        </nav>
    )
}
/* <li className={classes.userName}>{userName}</li> */
/*<form id="sendFile" onSubmit={this.onFileSend}>*/

export default NavBar;