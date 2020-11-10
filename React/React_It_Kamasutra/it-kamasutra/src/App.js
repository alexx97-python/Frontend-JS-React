import './App.css';
import React, { Component } from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';


const App = (props) => {

  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        {/* <Route exact path="/dialogs" component={Dialogs}/>
        <Route exact path="/profile" component={Profile}/> */}

        <Route exact path="/dialogs" render={ () => <Dialogs dialogsData={props.dialogsData}
         messagesData = {props.messagesData}/> }/>
        <Route exact path="/profile" render={ ()  => <Profile postData = {props.postData} />}/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
