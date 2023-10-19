import React from 'react'
import ReactDOM from 'react-dom/client'
import CustomRoutes from './routes/routes.tsx'
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CustomRoutes />
  </React.StrictMode>
);
