import React from 'react';
import Axios from 'axios';



let DownloadPage = (props) => {





    // Magnet 
    let newMagnetElement = React.createRef();
    
    let onMagnetChange = () => {
        let magnet = newMagnetElement.current.value;
        props.updateNewMagnetValue(magnet);
    }






    // Ссылка на 'file'
    let newFileElement = React.createRef();

    let onFileChange = () => {
        let file = newFileElement.current.files[0];
        props.updateNewFileValue(file); // КОлбэк (передаёт file)
        /*--------------------------------------------------------------*/
        //console.log(file.name); // Тест, имя объекта
        console.log('Массив:' + props.propsFile); // Чек данных для value (Только отрисовка)
        console.log('Файл:' + props.propsFiles); // Чек данных для value (Только отрисовка)
    }


//*******
    let sendMagnet = props.propsMagnet;

    let onSendForm = (sendMagnet) => {
        props.sendForm(sendMagnet);
    }
//*******


// РАБОЧАЯ ПРОВЕРКА СОСТОЯНИЯ   
let onTest = (sendMagnet) => {
    console.log(props.propsMagnet);
    alert(sendMagnet);
    console.log(props.propsFile); // Файл приходит!
}

        return (
        <div className=''>
            <div className='input-file'>
                <div>
                    <form id="sendFile" >
                        <input type="file" name="torrent" id="TestId" ref={newFileElement} onChange={onFileChange} value={props.propsFile.newTorrentFile}/>
                        <input type="text" name="magnet" ref={newMagnetElement} onChange={onMagnetChange} value={props.propsMagnet} />
                        <input type="submit" value="Send" onClick={onSendForm} ></input>
                    </form>
                    <input value="test" type="submit" onClick={onTest}/>
                </div>
            </div>
        </div>
        )
    }

/*<form id="sendFile" onSubmit={this.onFileSend}>*/

export default DownloadPage;