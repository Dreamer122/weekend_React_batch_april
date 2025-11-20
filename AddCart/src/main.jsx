import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProviderFunction } from './context/Mycontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProviderFunction>

    <App />
    </ProviderFunction>
  </StrictMode>,
)
