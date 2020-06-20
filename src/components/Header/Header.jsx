import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';



let Header = (props) => {

    //let userName = props.propsUser;
    let user = props.user;



    
    

    let logOut = () => {
        props.logOutUser();
    }

    let locUs = localStorage.getItem('user')
    console.log(locUs)
                    /* FIX ME   (style header) */
                    /* Сделай человеческий адпатив на флексах, как в сите торрентов */
                    /* Log Out  высвечивается при первом запуске? */
    return (
        <header className={classes.wripper}>
            <div className={classes.headerNavigation}>
                <ul className={classes.styleUl}>
                    <li className={classes.logo} ><NavLink to="/" className={classes.logo} >LOGO</NavLink></li>
                    <li className={classes.userName}>{user}</li>
                    {props.user == '' || localStorage.getItem('user') == null ?
                        <li><NavLink to="logPage" className={classes.navLink} >log Page</NavLink></li>
                        :
                        <li><NavLink to="logPage" onClick={logOut} className={classes.navLink} >log Out</NavLink></li>
                    }
                </ul>
            </div>
        </header>
    )
}


/*<form id="sendFile" onSubmit={this.onFileSend}>*/

export default Header;