import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';



let Header = (props) => {

        return (
        <div className={classes.wripper}>
            <header>
                <div>

                <NavLink to="/" className={classes.logo} >LOGO</NavLink>

                    <NavLink to="downloadPage" className={classes.navLink} >Download File</NavLink>
                
                
                    <NavLink to="downloadPage" className={classes.navLink} >Download File</NavLink>
                
                
                    <NavLink to="downloadPage" className={classes.navLink} >Download File</NavLink>
                </div>
            </header>
        </div>
        )
    }

/*<form id="sendFile" onSubmit={this.onFileSend}>*/

export default Header;