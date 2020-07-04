//import React from 'react';
//import DownloadPage from './DownloadPage.jsx';
import { connect } from 'react-redux';
import List from './List.jsx';
import { getList, removeElement } from '../../redux/list-reducer';





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
            dispatch(removeElement(id));
        }
    }
}


const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;