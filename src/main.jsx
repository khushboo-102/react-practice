import { StrictMode, useImperativeHandle } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import Greeting from './greeting.jsx'
import Avatar from './curely.jsx'
import './style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting/>
    <Avatar/>
    {/* <App/> */}
  </StrictMode>,
)
          