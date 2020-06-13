import React from 'react';
//import logo from './logo.svg';
import './App.css';
import DownloadPageContainer from './components/DownloadPageContainer';
import { Route, StaticRouter, Link } from 'react-router-dom';
import ListContainer from './components/List/ListContainer';
import DownloadProgressContainer from './components/DownloadProgress/DownloadProgressContainer';
import LogPageContainer from './components/Log/LogPageContainer';
import RegistrationPageContainer from './components/Log/Registration/RegistrationPageContainer';
import HeaderContainer from './components/Header/HeaderContainer';



const App = (store) => {

  return (
    <div className="App-wripper">
      <div className="Header">
        <HeaderContainer />
      </div>
      <div className="Container">
        <div className="Content">
          <Route path='/downloadPage' component={DownloadPageContainer} />
          <Route path='/list' component={ListContainer} />
          <Route path='/downloadProgress' component={DownloadProgressContainer} />
          <Route path='/logPage' component={LogPageContainer} />
          <Route path='/registration' component={RegistrationPageContainer} />
        </div>
      </div>
    </div>
  );
}


export default App;
