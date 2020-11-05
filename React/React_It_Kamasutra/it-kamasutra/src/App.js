import './App.css';
import React from 'react'

const App = () => {

  return (
    <div className="App">
      <ul>
        <li> Hello </li>
        <li> css </li>
        <li> html </li>
        <Header />
      </ul>
    </div>
  );
}

const Header = () => {
  return (
    <div>
      <a> Home </a>
      <a> News Feed </a>
      <a> Messages </a>
    </div>
  )
}

export default App;
