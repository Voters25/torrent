import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';



let Header = (props) => {

    //let userName = props.propsUser;
    let user = props.user;



    /* let localStorageChange = () => {
        if (localStorage.getItem('user') == null) {
            props.logOutUser();
        }
    }

    let storage = localStorage.getItem('user');
    if (localStorage.getItem('user') == null) {
        console.log(storage);
    } else {
        
    } */
    
    //console.log(storage);

    //        storage.addEventListener("change", localStorageChange);


    /* storage.forEach.call(element => {
        element.addEventListener("change", localStorageChange)
    }); */
    
    
    //console.log(document.cookie);
    
    
    

    let logOut = () => {
        props.logOutUser();
    }

                    /* FIX ME   (style header) */
                    /* Сделай человеческий адпатив на флексах, как в сите торрентов */
    return (
        <header className={classes.wripper}>
            <div className={classes.headerNavigation}>
                <ul className={classes.styleUl}>
                    <li className={classes.logo} ><NavLink to="/" className={classes.logo} >LOGO</NavLink></li>
                    <li className={classes.userName}>{user}</li>
                    {props.user == null ?
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