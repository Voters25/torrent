//import React from 'react';
//import DownloadPage from './DownloadPage.jsx';
import { connect } from 'react-redux';
import List from './List.jsx';
import { getList, removeElement } from '../../redux/list-reducer';
import { postMagnet, updateNewMagnetAC } from '../../redux/downloadPage-reducer.js';





// Тут данные из state
const mapStateToProps = (state) => {
    return {
        torrentList: state.list.torrentsList
    }
}

// Тут колбэки
const mapDispatchToProps = (dispatch) => {
    return {
        getTorrentsList: () => {
            dispatch(getList());
        },
        removeTorrentElement: (id) => {
            removeElement(id);
        },
        downloadTorrentElement: (magnet) => {
            dispatch(updateNewMagnetAC(magnet));
            dispatch(postMagnet(magnet));
        }
    }
}


const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;