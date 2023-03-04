import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from 'App';
import DataContent from 'source/DataContent.json';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App DataContent={DataContent}/>
  </React.StrictMode>
);

