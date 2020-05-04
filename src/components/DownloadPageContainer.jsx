import React from 'react';
import { connect } from 'react-redux';
import DownloadPage from './DownloadPage.jsx';






// Тут данные из state
const mapStateToProps = (state) => {
    return {

    }
}

// Тут колбэки
const mapDispatchToProps = (dispatch) => {
    return {

    }
}


const DownloadPageContainer = connect(mapStateToProps, mapDispatchToProps)(DownloadPage);

export default DownloadPageContainer;