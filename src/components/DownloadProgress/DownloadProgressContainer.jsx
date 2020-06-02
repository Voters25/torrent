//import React from 'react';
import { connect } from 'react-redux';
import DownloadPogress from './DownloadPogress.jsx';
import { getProgress, addHash } from '../../redux/downloadProgress-reducer.js';





// Тут данные из state
const mapStateToProps = (state) => {
    return {
        progress: state.progressPage.downloadFile,
        progressBar: state.progressPage.torrentStatus,

        // Краду у downloadPage newMagnetUrl для парсинга
        magnetURL: state.downloadPage.newMagnetUrl,

        test: state.progressPage.magnetInfoHash
    }
}

// Тут колбэки
const mapDispatchToProps = (dispatch) => {
    return {

        addInfoHash: (infoHash) => {
            dispatch(addHash(infoHash))
        },

        getProgressAC: () => {
            dispatch(getProgress())
        }

    }
}


const DownloadProgressContainer = connect(mapStateToProps, mapDispatchToProps)(DownloadPogress);

export default DownloadProgressContainer;