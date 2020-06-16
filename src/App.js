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
import NavBarContainer from './components/NavBar/NavBarContainer';
import FooterContainer from './components/Footer/FooterContainer';
//import { withCookies } from 'react-cookie';



const App = (props) => {

  return (
    <div className="App-wripper">
      <div className="Header">
        <HeaderContainer />
      </div>
      <div className="Container">
        <div className="NavBar"><NavBarContainer /></div>
        <div className="Content">
          <Route path='/downloadPage' component={DownloadPageContainer} />
          <Route path='/list' component={ListContainer} />
          <Route path='/downloadProgress' component={DownloadProgressContainer} />
          <Route path='/logPage' component={LogPageContainer} />
          <Route path='/registration' component={RegistrationPageContainer} />
        </div>
      </div>
      <div className="footerApp">
        <FooterContainer />
      </div>
    </div>
  );
}


export default App;

//export default withCookies(App);

/* <div className="Content">
          <Route path='/downloadPage' render={ () => ( <DownloadPageContainer cookies={props.cookies} /> )} />
          <Route path='/list' render={ () => ( <ListContainer cookies={props.cookies} /> )} />
          <Route path='/downloadProgress' render={ () => ( <DownloadProgressContainer cookies={props.cookies} /> )} />
          <Route path='/logPage' render={ () => ( <LogPageContainer cookies={props.cookies} /> )} />
          <Route path='/registration' render={ () => ( <RegistrationPageContainer cookies={props.cookies} /> )} />
        </div> */


/*

<div className="Content">
          <Route path='/downloadPage' component={DownloadPageContainer} />
          <Route path='/list' component={ListContainer} />
          <Route path='/downloadProgress' component={DownloadProgressContainer} />
          <Route path='/logPage' component={LogPageContainer} />
          <Route path='/registration' component={RegistrationPageContainer} />
        </div>

*/