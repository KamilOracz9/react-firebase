import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './assets/css/style.css';
import './assets/css/bootstrap.min.css';
import { Provider } from 'react-redux';

import configureStore from './store';
const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);

