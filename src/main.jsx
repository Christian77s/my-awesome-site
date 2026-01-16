import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// Membuat root aplikasi dengan standar React 19
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* basename harus sama persis dengan nama repository GitHub kamu */}
    <BrowserRouter basename="/my-awesome-site">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);