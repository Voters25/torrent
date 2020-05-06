import React from 'react';
import { connect } from 'react-redux';
import DownloadPage from './DownloadPage.jsx';
import DownloadPageC from './DownloadPageС.jsx';
import {addNewFileAC} from '../redux/downloadPage-reducer';





// Тут данные из state
const mapStateToProps = (state) => {
    return {

    }
}

// Тут колбэки
const mapDispatchToProps = (dispatch) => {
    return {
        addNewFileValue: (file) => {
            let action = addNewFileAC(file);
            dispatch(action);
        }
    }
}



const DownloadPageContainer = connect(mapStateToProps, mapDispatchToProps)(DownloadPageC);

export default DownloadPageContainer;