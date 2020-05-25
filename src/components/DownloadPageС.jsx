import React from 'react';
import classes from './DownloadPageC.module.css';
import TorrentList from './TorrentList/TorrentList';


class DownloadPageC extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getTorrentsList();
    }

    
render() {  // render сверху!


    // bytes -> mb
    /* function formatBytes(bytes, decimals = 2) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    } */
    
    // Вывод листа
    /* this.torrentElements = this.props.torrentList
        .map((torrentElements) => {
        return (
            <div className={classes.listContainer} key={torrentElements.id}>
                <div className={classes.torrentList} >
                    <p>{torrentElements.name}</p>
                    <p>{torrentElements.id}</p>
                    <p>{formatBytes(torrentElements.size)}</p>
                    <p>{new Date(torrentElements.date).toLocaleString()}</p>
                </div>
            </div>
        )
        }); */

        // Вывод листа
    this.torrentElements = this.props.torrentList
    .map((elements => <TorrentList key={elements.id} name={elements.name} id={elements.id} size={elements.size} date={elements.date} /> ));




    // Magnet 
    this.newMagnetElement = React.createRef();
    
    this.onMagnetChange = () => {
        let magnet = this.newMagnetElement.current.value;
        this.props.updateNewMagnetValue(magnet);
    }


    // Ссылка на 'file'
    this.newFileElement = React.createRef();

    this.onFileChange = () => {
        let file = this.newFileElement.current.files[0];

        if (file.type === 'application/x-bittorrent') {
            alert('correct');
            this.props.updateNewFileValue(file);
        } else {
            alert('incorrect');
            // Вызови зануление в newTorrentFile в reducer
            let button = false;
            this.props.incorrectFileValue(button);
        }
    }


//*************************************************
    this.sendMagnet = this.props.propsMagnet;
    this.onSendForm = () => {
        this.props.sendFormMagnet(this.sendMagnet);
    }

    this.sendFile = this.props.propsFile;
    this.onSendFile = () => {
        this.props.sendFormFile(this.sendFile);
    }
//*************************************************


// РАБОЧАЯ ПРОВЕРКА СОСТОЯНИЯ   
this.onTest = () => {
    console.log('Magnet URL:' + this.props.propsMagnet)
    console.log(this.props.propsFile);
    console.log(this.props.torrentList)
}

        return (
        <div className={classes.DownloadPageContainer}>
            <div className={classes.filePage}>
                <div className={classes.form}>
                    <form id="sendFile" onSubmit={this.onFileSend}>
                        <input type="file" name="torrent" id="TestId" accept="application/x-bittorrent" ref={this.newFileElement} onChange={this.onFileChange} value={this.props.propsFile.newTorrentFile}/>
                        {this.props.buttonActive &&
                        <button className={classes.sendFileButton} type="button" onClick={this.onSendFile} >SendFile</button>
                        }
                        <br/>
                        <input type="text" name="magnet" ref={this.newMagnetElement} onChange={this.onMagnetChange} value={this.props.propsMagnet} />
                        <button className={classes.sendMagnetButton} type="button" onClick={this.onSendForm} >SendMagnet</button>
                    </form>
                    <input value="test" type="submit" onClick={this.onTest}/>
                </div>
                <div>
                    {this.torrentElements}
                </div>
            </div>
        </div>
        )
    }
}


export default DownloadPageC;