import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import { cancellationRedirect } from '../../redux/downloadPage-reducer';



let Header = (props) => {


        return (
            <header className={classes.wripper}>
                <nav>
                    <ul className={classes.styleUl}>
                    <li className={classes.logo} ><NavLink to="/" className={classes.logo} >LOGO</NavLink></li>
                        <li><NavLink to="downloadPage" className={classes.navLink} >Download File</NavLink></li>
                        <li><NavLink to="list" className={classes.navLink} >List</NavLink></li>
                        <li><NavLink to="downloadProgress" className={classes.navLink} >Download Progress</NavLink></li>
                        <li><NavLink to="logPage"  className={classes.navLink} >log Page</NavLink></li>
                    </ul>
                </nav>
            </header>
        )
    }

/*<form id="sendFile" onSubmit={this.onFileSend}>*/

export default Header;