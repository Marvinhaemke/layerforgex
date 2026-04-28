// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Impressum from './Impressum.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Die Hauptseite (unsere lange Landingpage) */}
        <Route path="/" element={<App />} />
        
        {/* Die neue Unterseite */}
        <Route path="/index2" element={<Index2 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)