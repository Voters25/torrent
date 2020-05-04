import React from 'react';


let DownloadPage = (props) => {

    
    return (
        <div className=''>
            <div className='input-file'>
                <div>
                    <input type="file" />
                </div>
                <div>
                    <button>Send</button>
                </div>
            </div>
            <div className='input-maggnet'>
                <div>
                    <input type="text"/>
                </div>
                <div>
                    <button>Send-maggnet</button>
                </div>
            </div>
        </div>
    )
}



export default DownloadPage;