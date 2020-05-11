import React from 'react';
import logo from './logo.svg';
import './App.css';
import DownloadPageContainer from './components/DownloadPageContainer';
import { Route } from 'react-router-dom';

const App = (props) => {
  return (
    <div className="App-wripper">
      <Route path='/' render={ () => <DownloadPageContainer /> } />
    </div>
  );
}




export default App;
