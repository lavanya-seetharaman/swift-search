import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';
import {store, persistor} from "./redux/Store";
import { CircularProgress } from '@mui/material';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={<CircularProgress/>} persistor={persistor}>
      <React.StrictMode>
        <Router>
          <App />
        </Router>
      </React.StrictMode>
    </PersistGate>
  </Provider>
)
