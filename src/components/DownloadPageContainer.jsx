import React from 'react';
import { connect } from 'react-redux';
import DownloadPage from './DownloadPage.jsx';
import DownloadPageC from './DownloadPageС.jsx';
import {updateNewFileAC, updateNewMagnetAC, postMagnet} from '../redux/downloadPage-reducer';





// Тут данные из state
const mapStateToProps = (state) => {
    return {
        propsMagnet: state.downloadPage.newMagnetUrl,
        propsFile: state.downloadPage.newTorrentFile, // downloadPage - в combineReducers название state для downloadPage
        //test: state.downloadPage.test
    }
}

// Тут колбэки
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewFileValue: (file) => {
            let action = updateNewFileAC(file);
            dispatch(action);
        },
        updateNewMagnetValue: (magnet) => {
            let action = updateNewMagnetAC(magnet);
            dispatch(action);
            //dispatch(updateNewMagnetAC(magnet));  короткая запись?
        },

        /* sendForm: (sendMagnet) => { // Send
            dispatch(postMagnet(sendMagnet))
        } */

        }
    }

/*
addNewMagnetValue: (magnet) => {
    //    let action = addNewMagnetAC(magnet);
        (magnet) => {dispatch(addNewMagnetAC(magnet));}
        //dispatch(action);
    }
*/

const DownloadPageContainer = connect(mapStateToProps, mapDispatchToProps)(DownloadPage);

export default DownloadPageContainer;