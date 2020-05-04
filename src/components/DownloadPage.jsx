import React from 'react';


let DownloadPage = (props) => {




    // Колбэк отправки файла
    let onSendMagnet = () => {
    }

    // Получение изменений
    let onFileChange = () => {
        //let file = newFile.curent.value;

    }



    return (
        <div className=''>
            <div className='input-file'>
                <div>
                    <form name="sendFile">
                        <input type="file" name="torrent" onChange={onFileChange}/>
                        <input type="text" name="magnet"/>
                        <button type='submit'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}



export default DownloadPage;