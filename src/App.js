import React from 'react';
//import logo from './logo.svg';
import './App.css';
import DownloadPageContainer from './components/DownloadPageContainer';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ListContainer from './components/List/ListContainer';
import DownloadPogress from './components/DownloadProgress/DownloadPogress';


const App = (props) => {


  return (
    <div className="App-wripper">
      <div className="Header">
        <Header />
      </div>
      <div className="Container">
        <div className="Content">
          <Route path='/downloadPage' component={DownloadPageContainer} />
          <Route path='/list' component={ListContainer} />
          <Route path='/downloadProgress' component={DownloadPogress} />
        </div>
      </div>
    </div>
  );
}



export default App;
