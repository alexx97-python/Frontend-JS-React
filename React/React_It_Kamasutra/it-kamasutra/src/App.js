import './App.css';
import React, { Component } from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router-dom';
import { checkPropTypes } from 'prop-types';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';



const App = (props) => {

  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        {/* <Route exact path="/dialogs" component={Dialogs}/>
        <Route exact path="/profile" component={Profile}/> */}
        <Route exact path="/dialogs"
          render={ () => <DialogsContainer/>}/>

        <Route exact path="/profile"
          render={ () => <Profile/>}/>

        <Route exact path="/users"
          render={ () => <UsersContainer/>}/>

      </div>
    </div>
  );
}

export default App;
