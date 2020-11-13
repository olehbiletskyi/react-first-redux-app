import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import reducer from './reducers'


const store = createStore(reducer,);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
  document.getElementById('root')
);
