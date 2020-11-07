import './App.css';
import React, { Component } from 'react'

const App = () => {

  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://www.designevo.com/res/templates/thumb_small/blue-and-yellow-mansion.png' /> 
      </header >
      <nav className='nav'>
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className='content'>
        <div>
          <img src="https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg" />
        </div>
        <div>
          <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" />
        </div>
        <div>
          My posts
          <div> New post</div>
        </div>
        <div>
          <div>Post 1</div>
          <div>Post 2</div>
        </div>
      </div>
    </div>
  );
}

export default App;
