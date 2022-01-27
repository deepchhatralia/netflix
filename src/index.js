import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { firebaseApp } from './netflix/myFirebase'

export const FirebaseContext = React.createContext();


ReactDOM.render(
  <FirebaseContext.Provider value={firebaseApp}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FirebaseContext.Provider>,
  document.getElementById('root')
);