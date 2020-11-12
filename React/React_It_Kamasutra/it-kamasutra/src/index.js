import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {addMessage, addPost, updateNewPostText, updateNewMessageText, subscribe} from './redux/state'

let rerenderEntiretree = (state) => {
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

rerenderEntiretree(state);

subscribe(rerenderEntiretree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
