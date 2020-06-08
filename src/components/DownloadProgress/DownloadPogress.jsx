import React from 'react';
import ParseTorrent from 'parse-torrent';
import { formatBytes } from '../../Scripts/formatBytes';
import { formatSpeed } from '../../Scripts/FormatSpeed';
import FilesInfo from './FilesInfo/FilesInfo';


class DownloadPogress extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
        this.magnetURL = this.props.magnetURL;
        
        /* if (this.magnetURL == !"") {
            this.parse = ParseTorrent(this.magnetURL);
            this.infoHash = this.parse.infoHash;
            this.props.getProgressAC(this.infoHash);
        } */

        this.parse = ParseTorrent(this.magnetURL);
        this.infoHash = this.parse.infoHash;
        this.props.getProgressAC(this.infoHash);

    }

render() {

    // id
    let downloadId = this.props.downloadId;

    // Шкала
    let downloadProgress = this.props.downloadProgress;
    let downloadProgressToFixed = parseFloat(downloadProgress).toFixed(2);

    // Скорость
    let downloadSpeed = this.props.downloadSpeed;
    downloadSpeed = formatSpeed(downloadSpeed);
    //console.log(downloadSpeed);

    // Загружено
    let downloaded = this.props.downloaded;
    downloaded = formatBytes(downloaded);
    //console.log(downloaded);

    // Статус загрузки
    let ready = this.props.downloadReady;
    //console.log(ready);

    let progressBar = this.props.progressBar;
    console.log(progressBar);

    let filesInfo = this.props.filesInfo;
    console.log(filesInfo);

    

    /* this.filesInfoComponent = this.props.filesInfo
    .map((e => <FilesInfo key={e.name} name={e.name} downloaded={e.downloaded} lenght={e.lenght} progress={e.progress} /> ))
 */


    return (
        <div>
            <div>
                <p>downloadProgress</p>
                <p><progress value={downloadProgressToFixed} max='1.00'></progress></p>
                <p>{
                    downloadSpeed == 'NaN kbps' ? 0 : downloadSpeed
                }</p>
                <p>{
                    downloaded == 'NaN undefined' ? 0 : downloaded
                }</p>
            </div>
            
        </div>
    )
}

    
}



export default DownloadPogress;


/* <div>
    {this.props.buttonStatus == false ?
        0 : this.filesInfoComponent
    }
</div> */


/* 

{this.props.buttonStatus ? 
                    0 : this.props.filesInfo
                }

*/

/* <div>
            <p>downloadProgress</p>
            <p><progress value={downloadProgressToFixed} max='1.00'></progress></p>
            <p>{
                downloadSpeed == 'NaN kbps' ? 0 : downloadSpeed
            }</p>
            <p>{
                downloaded == 'NaN undefined' ? 0 : downloaded
            }</p>
        </div> */



/* 

filesInfo.map(e => {
                        return (
                            <div>
                                <p>{e.downloaded}</p>
                                <p>{e.lenght}</p>
                                <p>{e.name}</p>
                                <p>{e.progress}</p>
                            </div>
                        )
                    }
                    )

*/