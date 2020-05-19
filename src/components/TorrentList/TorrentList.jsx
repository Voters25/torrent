import React from 'react';


const TorrentList = (props) => {
    return (
        <div>
            <p>{props.id}</p>
            <p>{props.name}</p>
            <p>{props.size}</p>
            <p>{props.date}</p>
        </div>
    )
}


export default TorrentList;