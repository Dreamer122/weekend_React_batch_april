import { StrictMode } from 'react'
import {ReactDOM, createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Header} from "./App.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode> 
    {/*  react component */}
    {/* <Header/> */}
    <App/>
  </StrictMode>,
)


