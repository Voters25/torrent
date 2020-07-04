import React from 'react';
import classes from './TorrentList.module.css';
import { formatBytes } from '../../Scripts/formatBytes';


const TorrentList = (props) => {

    // ПРОПУСТИ date xthtp ->   let date = new Date(_сюда дату_)
    // let date = new Date(props.date);


    return (
        <div className={classes.torrentList} >
            <p className={classes.name}>{props.name}</p>
            
            <p className={classes.size}>{formatBytes(props.size)}</p>
            <p className={classes.date}>{new Date(props.date).toLocaleString()}</p>
        </div>
    )
}


export default TorrentList;