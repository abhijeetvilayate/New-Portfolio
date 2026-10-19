import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// 1. External Framework Styles (Loaded first so index.css overrides)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

// 2. Custom Application Design System & App
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
