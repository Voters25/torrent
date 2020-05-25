import React from 'react';
import classes from './TorrentList.module.css';


const TorrentList = (props) => {

    let formatBytes = (bytes, decimals = 2) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }


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