import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { CartProvider } from './context/cartContext'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { checkDarkTheme } from './utils/darkTheme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <ToastContainer
        position='top-left'
        autoClose={3000}
        limit={1}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        theme={checkDarkTheme() === true ? 'dark' : 'light'}
        style={{
          top: 120,
          left: 0
        }}
      />
      <App />
    </CartProvider>
  </React.StrictMode>,
)
