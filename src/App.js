import React from 'react';
//import logo from './logo.svg';
import './App.css';
import DownloadPageContainer from './components/DownloadPageContainer';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';

const App = (props) => {
  return (
    <div className="App-wripper">
      <div>
        <Header />
      </div>
      <div className="Container">
        

        <Route path='/downloadPage' render={ () => <DownloadPageContainer /> } />
      </div>
    </div>
  );
}




export default App;
