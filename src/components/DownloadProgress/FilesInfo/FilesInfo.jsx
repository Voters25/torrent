import React from 'react';
//import { formatBytes } from '../../Scripts/formatBytes';


// КОМПОНЕНТА ДЛЯ МАППИНГА    (ПОКА НЕ РАБОТАЕТ)


let FilesInfo = (props) => {

    console.log(props);

    return (
        <div>
            <span>{'Name: ' + props.name + ' '}</span>
            <span>{'Downloaded: ' + props.downloaded + ' '}</span>
            <span>{'Path: ' + props.path + ' '}</span>
            <span>{'Size: ' + props.size + ' '}</span>
            <span>{'Progress: ' + props.progress + ' '}</span>
        </div>
    )
}


export default FilesInfo;