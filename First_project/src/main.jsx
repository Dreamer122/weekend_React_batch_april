import { StrictMode } from 'react'
import {ReactDOM, createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode> 
    {/*  react component */}
   
    <App/>
  </StrictMode>,
)


