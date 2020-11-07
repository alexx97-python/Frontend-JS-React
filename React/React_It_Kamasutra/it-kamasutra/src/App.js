import './App.css';
import React, { Component } from 'react'
import Technologies from './technologies';
import Header from './header'

const App = () => {

  return (
    <div className="App">
      <ul>
        <Header />
        <Technologies />
      </ul>
    </div>
  );
}

export default App;
