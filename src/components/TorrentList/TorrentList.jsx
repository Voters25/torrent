import React from 'react';
import classes from './TorrentList.module.css';
import { formatBytes } from '../../Scripts/formatBytes';


const TorrentList = (props) => {

    // ПРОПУСТИ date xthtp ->   let date = new Date(_сюда дату_)
    // let date = new Date(props.date);


    let downloadNow = () => {
        let magnet = props.magnet;
        props.downloadNow(magnet);
    }
    let deleteTorrent = () => {
        let id = props.id;
        props.deleteTorrent(id);
    }


    return (
        <div className={classes.torrentList} >
            <p className={classes.name}>{props.name}</p>
            
            <p className={classes.size}>{formatBytes(props.size)}</p>
            <p className={classes.date}>{new Date(props.date).toLocaleString()}</p>

            <button className={classes.button} onClick={downloadNow}>Download now</button>
            <button className={classes.buttonDelete} onClick={deleteTorrent}>Delete</button>
        </div>
    )
}


export default TorrentList;
