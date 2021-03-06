import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import { useEffect } from 'react';



const Header = (props) => {


    useEffect(() => {
        props.checkUser();
    }, []);


    //let userName = props.propsUser;
    let user = props.user;
    let errorStatus = props.errorStatus;

    

    let logOut = () => {
        props.logOutUser();
    }

    let locUs = localStorage.getItem('user')
    console.log(locUs)
                    /* FIX ME   (style header) */
                    /* Сделай человеческий адпатив на флексах, как в сите торрентов */
    return (
        <header className={classes.wripper}>
            <div className={classes.errorBlock}>
                {errorStatus ?
                    null
                    :
                    <p className={classes.error}>Error</p>
                }
            </div>
            <div className={classes.headerNavigation}>
                <ul className={classes.styleUl}>
                    <span className={classes.empty}></span>
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


export default Header;