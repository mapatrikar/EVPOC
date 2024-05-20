import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
/*import Menubar from './components/ui/Menubar.tsx';*/



ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode> 
        {/*<Menubar />*/}
    <App/>
  </React.StrictMode>,
)
