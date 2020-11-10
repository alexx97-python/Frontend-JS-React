import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData = [
  {id: 1, post: 'Hi, how are you?', likesCount: 12},
  {id: 2, post: 'It\'s my first post', likesCount: 15},
  {id: 3, post: 'Hi', likesCount: 25},
  {id: 4, post: 'Hi', likesCount: 19},
  {id: 5, post: 'Hi', likesCount: 9},
]

let dialogsData = [
  {id: 1, name: 'Dimych'},
  {id: 2, name: 'Lesha'},
  {id: 3, name: 'Sveta'},
  {id: 4, name: 'Zakhar'},
  {id: 5, name: 'Vova'},
]

let messagesData = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'How is your it-kamasutra?'},
  {id: 3, message: 'Yo'},
  {id: 4, message: 'Yo'},
  {id: 5, message: 'Yo'},
]



ReactDOM.render(
  <React.StrictMode>
    <App postData={postData} dialogsData={dialogsData} messagesData={messagesData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
