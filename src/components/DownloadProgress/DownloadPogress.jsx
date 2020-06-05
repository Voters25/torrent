import React from 'react';
import ParseTorrent from 'parse-torrent';
import { formatBytes } from '../../Scripts/formatBytes';
import { formatSpeed } from '../../Scripts/FormatSpeed';


class DownloadPogress extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
        this.magnetURL = this.props.magnetURL;
        this.parse = ParseTorrent(this.magnetURL);
        this.infoHash = this.parse.infoHash;        // Отправь его дальше в стэйт


        this.props.getProgressAC(this.infoHash);

    }

render() {

    // Шкала
    let downloadProgress = this.props.downloadProgress;
    let downloadProgressToFixed = parseFloat(downloadProgress).toFixed(2);

    // Скорость
    let downloadSpeed = this.props.downloadSpeed;
    downloadSpeed = formatSpeed(downloadSpeed);
    console.log(downloadSpeed);

    // Загружено
    let downloaded = this.props.downloaded;
    downloaded = formatBytes(downloaded);
    console.log(downloaded);


    return (
        <div>
            <p>downloadProgress</p>
            {/*<div>{this.props.progressBar}</div>*/}
            <p><progress value={downloadProgressToFixed} max='1.00'></progress></p>
            <p>{
                downloadSpeed == 'NaN kbps' ? 0 : downloadSpeed
            }</p>
            <p>{
                downloaded == 'NaN undefined' ? 0 : downloaded
            }</p>
        </div>
    )
}
}



export default DownloadPogress;