import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function API() {
  var url = 'http://newsapi.org/v2/top-headlines?country=us&apiKey=d0c0f9ae66bf4ec69c4a71c94c2cc0f1';
  var req = new Request(url);
  fetch(req).then(
    function(response) {
      console.log(response.json());
    }
  );
  return null;
}

ReactDOM.render(
  <React.StrictMode>
    <API />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
