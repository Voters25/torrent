//import React from 'react';
//import DownloadPage from './DownloadPage.jsx';
import { connect } from 'react-redux';
import DownloadPageC from './List.jsx';
import {updateNewFileAC, updateNewMagnetAC, postMagnet, postFile, checkNewFileAC, incorrectFileAC, getList} from '../../redux/list-reducer';




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
        }
    }
}


const ListContainer = connect(mapStateToProps, mapDispatchToProps)(DownloadPageC);

export default ListContainer;