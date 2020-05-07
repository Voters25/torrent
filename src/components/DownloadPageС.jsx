import React from 'react';



class DownloadPageC extends React.Component {
    constructor(props) {
        super(props);
    }
/*
    componentDidMount() {
    
}
*/



/*
    onFileSend = (file) => {
        // Запрос???
    }
*/



    // Ссылка на 'magnet'
    newMagnetUrlElement = React.createRef();

    onMagnetChange = () => {
        let magnet = this.newMagnetUrlElement.current.value;
        this.props.addNewMagnetValue(magnet);
        /*--------------------------------------------------------------*/
        console.log(this.props.propsMagnet.newMagnetUrl);
    }


    // Ссылка на 'file'
    newFileElement = React.createRef();

    onFileChange = () => {
        //let file = newFile.curent.value;
        let file = this.newFileElement.current.files[0];
        this.props.addNewFileValue(file); // КОлбэк (передаёт file)
        /*--------------------------------------------------------------*/
        console.log(file.name); // Тест, имя объекта
        console.log(this.props.propsFile); // Чек массива с объектом
    }

    

    render() {
        return (
        <div className=''>
            <div className='input-file'>
                <div>
                    <form id="sendFile">
                        <input type="file" name="torrent" ref={this.newFileElement} onChange={this.onFileChange} value={this.props.propsFile.newTorrentFile}/>
                        <input type="text" name="magnet" ref={this.newMagnetUrlElement} onChange={this.onMagnetChange} value={this.props.propsMagnet.newMagnetUrl} />
                        <input type='submit' value="Send" onClick={this.onFileSend}/>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}



export default DownloadPageC;