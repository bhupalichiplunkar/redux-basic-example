import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import reducers from './reducers'
import { createStore } from 'redux';
import './index.css';
import App from './components/App';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={ createStore(reducers) }>
        <App />
    </Provider>
    , document.getElementById('root'));
// registerServiceWorker();
