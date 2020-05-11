import React from 'react';
import Axios from 'axios';



class DownloadPageC extends React.Component {
    constructor(props) {
        super(props);
    }
/*
    componentDidMount() {
    
}
*/




    // Magnet 
    newMagnetElement = React.createRef();
    
    onMagnetChange = () => {
        let magnet = this.newMagnetElement.current.value;
        this.props.updateNewMagnetValue(magnet);
    }






    // Ссылка на 'file'
    newFileElement = React.createRef();

    onFileChange = () => {
        let file = this.newFileElement.current.files[0];
        this.props.updateNewFileValue(file); // КОлбэк (передаёт file)
        /*--------------------------------------------------------------*/
        //console.log(file.name); // Тест, имя объекта
        console.log('Массив:' + this.props.propsFile); // Чек данных для value (Только отрисовка)
        console.log('Файл:' + this.props.propsFiles); // Чек данных для value (Только отрисовка)
    }


//*******
    sendMagnet = this.props.propsMagnet;

    onSendForm = (sendMagnet) => {
        this.props.sendForm(sendMagnet);
    }
//*******


// РАБОЧАЯ ПРОВЕРКА СОСТОЯНИЯ   
onTest = (sendMagnet) => {
    console.log(this.props.sendMagnet);
    alert(this.sendMagnet);
}


    render() {
        return (
        <div className=''>
            <div className='input-file'>
                <div>
                    <form id="sendFile" onSubmit={this.onFileSend}>
                        <input type="file" name="torrent" id="TestId" ref={this.newFileElement} onChange={this.onFileChange} value={this.props.propsFile.newTorrentFile}/>
                        <input type="text" name="magnet" ref={this.newMagnetElement} onChange={this.onMagnetChange} value={this.props.propsMagnet} />
                        <input type="submit" value="Send" onClick={this.onSendForm} ></input>
                    </form>
                    <input value="test" type="submit" onClick={this.onTest}/>
                </div>
            </div>
        </div>
        )
    }
}


export default DownloadPageC;