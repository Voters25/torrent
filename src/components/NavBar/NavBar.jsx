import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavBar.module.css';
import { cancellationRedirect } from '../../redux/downloadPage-reducer';



let NavBar = (props) => {

    let userName = props.propsUser;


    return (
        <nav className={classes.wripper}>
            <nav className={classes.navNavBAr}>
                <ul className={classes.styleUl}>
                    <li className={classes.userName}>{userName}</li>
                    <li className={classes.styleLi}><NavLink to="downloadPage" className={classes.navLink} >Download File</NavLink></li>
                    <li className={classes.styleLi}><NavLink to="list" className={classes.navLink} >List</NavLink></li>
                    <li className={classes.styleLi}><NavLink to="downloadProgress" className={classes.navLink} >Download Progress</NavLink></li>
                    <li className={classes.styleLi}><NavLink to="logPage" className={classes.navLink} >log Page</NavLink></li>
                </ul>
            </nav>
        </nav>
    )
}

/*<form id="sendFile" onSubmit={this.onFileSend}>*/

export default NavBar;