import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';


const middleware = [thunk];
if (process.env.MODE_ENV !== 'production') {
    middleware.push(createLogger());
}


const store = createStore(
    reducer,
    applyMiddleware(...middleware)
    );


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
  document.getElementById('root')
);
