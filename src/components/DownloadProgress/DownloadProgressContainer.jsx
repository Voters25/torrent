//import React from 'react';
import { connect } from 'react-redux';
import DownloadPogress from './DownloadPogress.jsx';
import { getProgress } from '../../redux/downloadProgress-reducer.js';





// Тут данные из state
const mapStateToProps = (state) => {
    return {
        progress: state.progressPage.downloadFile
    }
}

// Тут колбэки
const mapDispatchToProps = (dispatch) => {
    return {
        
        getProgressAC: () => {
            dispatch(getProgress())
        }

    }
}


const DownloadProgressContainer = connect(mapStateToProps, mapDispatchToProps)(DownloadPogress);

export default DownloadProgressContainer;