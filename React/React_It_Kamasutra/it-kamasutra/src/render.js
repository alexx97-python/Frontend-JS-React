import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addMessage, addPost, updateNewPostText, updateNewMessageText} from './redux/state'

export let rerenderEntiretree = (state) => {
    ReactDOM.render(
    <React.StrictMode>
      <App state={state}
       addPost={addPost}
       updateNewPostText={updateNewPostText}
       addMessage={addMessage}
       updateNewMessageText={updateNewMessageText}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}