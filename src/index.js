import React from 'react';
import { createRoot } from 'react-dom/client';

import { store } from './redux/store';
import { Provider } from 'react-redux';

import './index.scss';
import App from './App';

createRoot(document.querySelector('.root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
