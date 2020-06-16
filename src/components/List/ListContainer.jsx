//import React from 'react';
//import DownloadPage from './DownloadPage.jsx';
import { connect } from 'react-redux';
import List from './List.jsx';
import { getList } from '../../redux/list-reducer';





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



const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;