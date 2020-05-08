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




    onFileSend = (e) => {
        e.preventDefault()
        /* console.log(this.props.propsFile)
        console.log(this.props.propsFiles)
        console.log(this.props.propsMagnet.newMagnetUrl) */
        console.log(this.props)
        console.log(this.props.test)
        // Запрос???
    }




    // Ссылка на 'magnet'
    //newMagnetUrlElement = React.createRef();

    // Бывшая "ссылка"
    //newMagnetUrlElement = this.props.propsMagnet;

    onMagnetChange = (event) => {
        let magnet = event.target.value;
        this.props.updateNewMagnetValue(magnet);
        /*--------------------------------------------------------------*/
        console.log(this.props.propsMagnet);
        //console.log(this.newMagnetUrlElement);
    }
    //let magnet = this.newMagnetUrlElement.current.value;


    // Ссылка на 'file'
    newFileElement = React.createRef();

    onFileChange = () => {
        let file = this.newFileElement.current.files[0];
        this.props.updateNewFileValue(file); // КОлбэк (передаёт file)
        /*--------------------------------------------------------------*/
        console.log(file.name); // Тест, имя объекта
        console.log('Массив:' + this.props.propsFile); // Чек данных для value (Только отрисовка)
        console.log('Файл:' + this.props.propsFiles); // Чек данных для value (Только отрисовка)
    }

    

    render() {
        return (
        <div className=''>
            <div className='input-file'>
                <div>
                    <form id="sendFile" onSubmit={this.onFileSend}>
                        <input type="file" name="torrent" ref={this.newFileElement} onChange={this.onFileChange} value={this.props.propsFile.newTorrentFile}/>
                        <input type="text" name="magnet"  onChange={this.onMagnetChange} value={this.props.propsMagnet.newMagnetUrl} />
                        <input type='submit' value="Send" />
                    </form>
                </div>
            </div>
        </div>
        )
    }
}

//onClick={this.onFileSend}
/*ref={this.newMagnetUrlElement}*/

export default DownloadPageC;