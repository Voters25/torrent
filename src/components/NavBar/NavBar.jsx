import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavBar.module.css';
import { cancellationRedirect } from '../../redux/downloadPage-reducer';
import downloadLogo from '../../img/svg/download.svg';
import addLogo from '../../img/svg/add.svg';
import listLogo from '../../img/svg/list.svg';




let NavBar = (props) => {

    let userName = props.user;


    return (
        <nav className={classes.wripper}>
            <nav className={classes.navNavBar}>
                <ul className={classes.styleUl}>
                    <img src={addLogo} alt="Download file" width="30px" />
                    <img src={downloadLogo} alt="Download progress" width="40px" />
                    <img src={listLogo} alt="Torrent list" width="40px" />
                    <li className={classes.styleLi}><NavLink to="downloadPage" className={classes.navLink} >Download File</NavLink></li>
                    <li className={classes.styleLi}><NavLink to="downloadProgress" className={classes.navLink} >Download Progress</NavLink></li>
                    {userName ?
                        <li className={classes.styleLi}><NavLink to="list" className={classes.navLink} >List</NavLink></li>
                        :
                        null
                    }
                </ul>
            </nav>
        </nav>
    )
}
/* <li className={classes.userName}>{userName}</li> */
/*<form id="sendFile" onSubmit={this.onFileSend}>*/

export default NavBar;