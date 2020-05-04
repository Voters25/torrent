import React from 'react';


let DownloadPage = (props) => {


    let newFileElement = React.createRef();


    // Колбэк отправки файла
    let onSendMagnet = () => {
    }

    // Получение изменений
    let onFileChange = () => {
        //let file = newFile.curent.value;
        let file = newFileElement.current.files[0];
        props.addNewFileValue(file); // Забирает обновлённый state
        console.log(file.name); // Тест, имя объекта
    }


    /*======================================================================*/

    let input = document.querySelector('input[type="file"]')

    //let formData = new FormData(sendFile);

    // test fetch
    fetch('/torrent',
        
    )

    /*======================================================================*/



    return (
        <div className=''>
            <div className='input-file'>
                <div>
                    <form id="sendFile">
                        <input type="file" name="torrent" ref={newFileElement} onChange={onFileChange}/>
                        <input type="text" name="magnet"/>
                        <input type='submit' value="Send" />
                    </form>
                </div>
            </div>
        </div>
    )
}



export default DownloadPage;