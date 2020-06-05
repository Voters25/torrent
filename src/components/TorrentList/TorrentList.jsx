import React from 'react';
import classes from './TorrentList.module.css';
import { formatBytes } from '../../Scripts/formatBytes';


const TorrentList = (props) => {

    return (
        <div className={classes.torrentList} >
            <p>{props.name}</p>
            <p>{props.id}</p>
            <p>{formatBytes(props.size)}</p>
            <p>{new Date(props.date).toLocaleString()}</p>
        </div>
    )
}


export default TorrentList;