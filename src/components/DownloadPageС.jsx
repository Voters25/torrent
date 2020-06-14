import React from 'react';
import classes from './DownloadPageC.module.css';
import { Redirect, useHistory } from 'react-router-dom';


class DownloadPageC extends React.Component {
    constructor(props) {
        super(props);
        //this.localState = {redirectToDownloadProgress: false}
    }

    /* componentDidMount() {
        
    } */

    
render() {


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
            //alert('correct');
            this.props.updateNewFileValue(file);
        } else {
            //alert('incorrect');
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
}






    return (
        <div className={classes.filePage}>

            <form className={classes.form} id="sendFile" onSubmit={this.onFileSend} enctype="multipart/form-data">
                
                <p className={classes.Download}>Download</p>

                <input className={classes.magnetInput} type="text" name="magnet" ref={this.newMagnetElement} onChange={this.onMagnetChange} value={this.props.propsMagnet} />
                <button className={classes.sendMagnetButton} type="button" onClick={this.onSendForm} >SendMagnet</button>
                
                <br />

                <label className={classes.fileLabel} htmlFor="FileInput">Choise a file</label>
                <input className={classes.fileInput} type="file" name="torrent" id="FileInput" accept="application/x-bittorrent" ref={this.newFileElement} onChange={this.onFileChange} value={this.props.propsFile.newTorrentFile} />
                
                {this.props.buttonActive ?
                    <button className={classes.sendFileButtonActive} type="button" onClick={this.onSendFile} >SendFile</button>
                    :
                    <button className={classes.sendFileButtonPassive} disabled="disabled" type="button" onClick={this.onSendFile} >SendFile</button>
                }
                
            </form>
            <input className={classes.testButton} value="test" type="submit" onClick={this.onTest} />

        </div>
    )
    }
}



/*

{this.props.buttonActive &&
                    <button className={classes.sendFileButton} type="button" onClick={this.onSendFile} >SendFile</button>
                }

*/


export default DownloadPageC;






/* this.urlTest = () => {
    let oldHREF = window.location.href;
    const res = oldHREF.replace('downloadPage', 'downloadProgress');
    window.location.href = res;
    
} */
