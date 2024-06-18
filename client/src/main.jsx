import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './controller/store/store.js';
import App from './App.jsx'
import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";
import './index.css'
import {Provider} from 'react-redux'
import { ProSidebarProvider } from "react-pro-sidebar";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ProSidebarProvider>
      <App />
      </ProSidebarProvider>
    </Provider>
  </React.StrictMode>,
)
