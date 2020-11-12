import './App.css';
import React, { Component } from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import { checkPropTypes } from 'prop-types';


const App = (props) => {

  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        {/* <Route exact path="/dialogs" component={Dialogs}/>
        <Route exact path="/profile" component={Profile}/> */}

        <Route exact path="/dialogs"
          render={ () => <Dialogs 
            dialogsPage={props.state.dialogsPage}
            addMessage={props.addMessage}
            updateNewMessageText={props.updateNewMessageText} />}/>
        <Route exact path="/profile" 
          render={ ()  => <Profile 
            profilePage= {props.state.profilePage} 
            addPost = {props.addPost}
            updateNewPostText={props.updateNewPostText}/>}/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
