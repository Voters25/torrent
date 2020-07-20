import React from 'react';
import { formatBytes } from '../../../Scripts/formatBytes';
//import { formatBytes } from '../../Scripts/formatBytes';


// КОМПОНЕНТА ДЛЯ МАППИНГА    (ПОКА НЕ РАБОТАЕТ)


let FilesInfo = (props) => {

    console.log(props);
    let progr = String(props.progress).slice(0, 4);    

    return (
        <div>
            <span>{'Name: ' + props.name + ' '}</span>
            <span>{'Downloaded: ' + formatBytes(props.downloaded) + ' ' + 'of ' + formatBytes(props.size) + ' '}</span>
            <span>{'Progress: ' + (progr * 100) + '%'}</span>
        </div>
    )
}

export default FilesInfo;

/*

        <div>
            <span>{'Name: ' + props.name + ' '}</span>
            <span>{'Downloaded: ' + formatBytes(props.downloaded) + ' '}</span>
            <span>{'Path: ' + props.path + ' '}</span>
            <span>{'Size: ' + formatBytes(props.size) + ' '}</span>
            <span>{'Progress: ' + (progr * 100) + '%'}</span>
        </div>

*/