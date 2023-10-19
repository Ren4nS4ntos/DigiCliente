import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import AppRotas from "./routes/routes";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppRotas/>
  </React.StrictMode>
);
