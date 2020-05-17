import React from 'react';
import classes from './DownloadPageC.module.css';


class DownloadPageC extends React.Component {
    constructor(props) {
        super(props);
    }
/*
    componentDidMount() {
    
}
*/
render() {  // render сверху!


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
    //alert(this.sendMagnet);
    console.log(this.props.propsFile); // Файл приходит!
}

        return (
        <div className=''>
            <div className='input-file'>
                <div>
                    <form id="sendFile" onSubmit={this.onFileSend}>
                        <input type="file" name="torrent" id="TestId" ref={this.newFileElement} onChange={this.onFileChange} value={this.props.propsFile.newTorrentFile}/>
                        {this.props.buttonActive &&
                        <button className={classes.sendFileButton} type="button" onClick={this.onSendFile} accept="application/x-bittorrent" >SendFile</button>
                        }
                        <br/>
                        <input type="text" name="magnet" ref={this.newMagnetElement} onChange={this.onMagnetChange} value={this.props.propsMagnet} />
                        <button className={classes.sendMagnetButton} type="button" onClick={this.onSendForm} >SendMagnet</button>
                    </form>
                    <input value="test" type="submit" onClick={this.onTest}/>
                </div>
            </div>
        </div>
        )
    }
}

/* accept="application/x-bittorrent" */
/* <button className={classes.sendFileButton} type="button" onClick={this.onSendFile} accept="application/x-bittorrent" >SendFile</button> */

export default DownloadPageC;