//import React from 'react';
import { connect } from 'react-redux';
import DownloadPogress from './DownloadPogress.jsx';
import { getProgress, addHash, ChangeFilesInfoButton, callForwardingList, zeroingTorrentStatus, setInfoHashToStorage, removeInfoHashLocalStorage } from '../../redux/downloadProgress-reducer.js';





// Тут данные из state
const mapStateToProps = (state) => {
    return {
        progressBar: state.progressPage.torrentStatus, // Все данные
        
        // Данные о загрузке
        downloadName: state.progressPage.torrentStatus.name,
        downloadProgress: state.progressPage.torrentStatus.progress, // Шкала
        downloaded: state.progressPage.torrentStatus.downloaded, // Загружено
        downloadSpeed: state.progressPage.torrentStatus.downloadSpeed, // Скорость
        downloadId: state.progressPage.torrentStatus.id,
        downloadReady: state.progressPage.torrentStatus.ready, // Статус загрузки
        downloadSize: state.progressPage.torrentStatus.length,

        filesInfo: state.progressPage.torrentStatus.files,

        buttonStatus: state.progressPage.FilesInfoButton,


        // Краду у downloadPage newMagnetUrl для парсинга
        magnetURL: state.downloadPage.newMagnetUrl
    }
}


// Тут колбэки
const mapDispatchToProps = (dispatch) => {
    return {

        setInfoHashToLocalStorage: (infoHash) => {
            setInfoHashToStorage(infoHash)
        },
        removeInfoHash: () => {
            removeInfoHashLocalStorage()
        },

        getProgressAC: (magnetInfoHash) => {
            dispatch(getProgress(magnetInfoHash))
        },

        changeButtonStatusAC: () => {
            dispatch(ChangeFilesInfoButton())
        },

        zeroingTorrent: () => {
            dispatch(zeroingTorrentStatus())
        },

        callForowarding: () => {
            callForwardingList()
        }
    }
}



const DownloadProgressContainer = connect(mapStateToProps, mapDispatchToProps)(DownloadPogress);

export default DownloadProgressContainer;