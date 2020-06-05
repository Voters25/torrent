//import React from 'react';
import { connect } from 'react-redux';
import DownloadPogress from './DownloadPogress.jsx';
import { getProgress, addHash } from '../../redux/downloadProgress-reducer.js';





// Тут данные из state
const mapStateToProps = (state) => {
    return {
        progress: state.progressPage.downloadFile, // Массив файлов?   ПОКА НЕ РАБОТАЕТ

        progressBar: state.progressPage.torrentStatus, // Все данные

        // Данные о загрузке
        downloadProgress: state.progressPage.torrentStatus.progress, // Шкала
        downloaded: state.progressPage.torrentStatus.downloaded, // Загружено
        downloadSpeed: state.progressPage.torrentStatus.downloadSpeed, // Скорость


        // Краду у downloadPage newMagnetUrl для парсинга
        magnetURL: state.downloadPage.newMagnetUrl,
    }
}

// Тут колбэки
const mapDispatchToProps = (dispatch) => {
    return {

        getProgressAC: (magnetInfoHash) => {
            dispatch(getProgress(magnetInfoHash))
        }

    }
}


const DownloadProgressContainer = connect(mapStateToProps, mapDispatchToProps)(DownloadPogress);

export default DownloadProgressContainer;