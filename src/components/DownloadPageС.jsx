import React from 'react';



class DownloadPageC extends React.Component {
    constructor(props) {
        super(props);
    }
/*
    componentDidMount() {
    
}
*/

//    onSendMagnet = () => {
//    }


/*
    onFileSend = (file) => {
            alert(file.type);                // Запрос???
        }
*/


    newFileElement = React.createRef();

    onFileChange = () => {
        //let file = newFile.curent.value;
        let file = this.newFileElement.current.files[0];
        this.props.addNewFileValue(file); // Забирает обновлённый state
        console.log(file.name); // Тест, имя объекта
        console.log(this.props.propsFile);
    }

    

    render() {
        return (
        <div className=''>
            <div className='input-file'>
                <div>
                    <form id="sendFile">
                        <input type="file" name="torrent" ref={this.newFileElement} onChange={this.onFileChange} value={this.props.propsFile.newTorrentFile}/>
                        <input type="text" name="magnet"/>
                        <input type='submit' value="Send" onClick={this.onFileSend}/>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}



export default DownloadPageC;