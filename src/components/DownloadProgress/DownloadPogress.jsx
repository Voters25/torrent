import React from 'react';
import ParseTorrent from 'parse-torrent';
import { formatBytes } from '../../Scripts/formatBytes';
import { formatSpeed } from '../../Scripts/FormatSpeed';
import classes from './DownloadPogress.module.css';
import FilesInfo from './FilesInfo/FilesInfo';


class DownloadPogress extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        

        this.magnetURL = this.props.magnetURL;
        //console.log(this.magnetURL);

        try {
            //  При отправке магнет ссылки.
            if (this.magnetURL !== "") {
                this.parse = ParseTorrent(this.magnetURL);
                this.infoHash = this.parse.infoHash;
                this.props.setInfoHashToLocalStorage(this.infoHash);
                this.props.getProgressAC(localStorage.getItem('infoHash'));
            } else {
                this.props.getProgressAC(localStorage.getItem('infoHash'));
            }
            
            //this.props.getProgressAC(this.infoHash);
        }
        catch {
            console.log('Нету магнет url');
        }

    }

render() {

    // id
    let downloadId = this.props.downloadId;

    // Шкала
    let downloadProgress = this.props.downloadProgress;
    let downloadProgressToFixed = parseFloat(downloadProgress).toFixed(2);
    if (downloadProgress == 1) {
        console.log("STOP DOWNL");
        this.props.zeroingTorrent();
        this.props.removeInfoHash();
        this.props.callForowarding();
    }




    // Имя
    let downloadName = this.props.downloadName;

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
    
    try {
        this.filesInfoComponent = this.props.filesInfo
            .map((e => <FilesInfo key={e.name} name={e.name} downloaded={e.downloaded} size={e.size} progress={e.progress} path={e.path} /> ))
    } catch {
        console.log('пока нету фала');
    }
    
            // Если не приходит имя, то сделать какое-то оповещение об ожидании. Если истечёт время, то = ошибка

            // ПРОПУСТИ date xthtp ->   let date = new Date(_сюда дату_)

            // Сделай кнопку загрузки, когда 0.001 прогресс приходит. id и path динамически возьми. <button href=torrent\id\path download></button>
            // <button href=`torrent\${downloadId}\${filesInfo.path}` download></button>
            
    return (
        <div className={classes.wripper}>

            {downloadName == undefined ?
                <div>
                    <p>NOOOOOOOO</p>
                </div>
                :
                <div>
                    <p className={classes.DownloadPogress}>Download progress</p>
                    <p className={classes.DownloadPogress}>КНОПКА ЗАГРУЗКИ (уже в комментарии написана)</p>
                    <p className={classes.DownloadPogress}>{downloadName}</p>
                    <div className={classes.paragraphProgress}><progress className={classes.progress} value={downloadProgressToFixed} max='1.00'></progress></div>
                    <div className={classes.downloadSpeed}>{
                        downloadSpeed == 'NaN kbps' ? 0 : downloadSpeed
                    }</div>
                    <div className={classes.downloaded}>{
                        downloaded == 'NaN undefined' ? 0 : downloaded  + ' из: ' + 'size'
                    }</div>
                    <div>
                        {this.filesInfoComponent}
                    </div>
                </div>
            }

        </div>
    )
}

    
}



export default DownloadPogress;


//                         <FilesInfo key={this.props.filesInfo.name} name={this.props.filesInfo.name} downloaded={this.props.filesInfo.downloaded} size={this.props.filesInfo.size} progress={this.props.filesInfo.progress} path={this.props.filesInfo.path} />
//  <FilesInfo key={this.props.filesInfo[]} />

/*

            {downloadName == undefined ?
                <div>
                    <p>NOOOOOOOO</p>
                </div>
                :

                <div>
                    <p className={classes.DownloadPogress}>downloadProgress</p>
                    <p className={classes.DownloadPogress}>ДОСАНЬ МАГНЕТ ИЗ ФАЙЛА</p>
                    <p className={classes.DownloadPogress}>{downloadName}</p>
                    <div className={classes.paragraphProgress}><progress className={classes.progress} value={downloadProgressToFixed} max='1.00'></progress></div>
                    <div className={classes.downloadSpeed}>{
                        downloadSpeed == 'NaN kbps' ? 0 : downloadSpeed
                    }</div>
                    <div className={classes.downloaded}>{
                        downloaded == 'NaN undefined' ? 0 : downloaded
                    }</div>
                </div>
            }

*/

/*

<p className={classes.DownloadPogress}>downloadProgress</p>
                    <p className={classes.DownloadPogress}>ДОСАНЬ МАГНЕТ ИЗ ФАЙЛА</p>
                    <p className={classes.DownloadPogress}>{downloadName}</p>
                    <div className={classes.paragraphProgress}><progress className={classes.progress} value={downloadProgressToFixed} max='1.00'></progress></div>
                    <div className={classes.downloadSpeed}>{
                        downloadSpeed == 'NaN kbps' ? 0 : downloadSpeed
                    }</div>
                    <div className={classes.downloaded}>{
                    downloaded == 'NaN undefined' ? 0 : downloaded
                    }</div>

*/