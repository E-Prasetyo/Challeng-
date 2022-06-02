import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import {  BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import AuthProvider from './Contexts/Auth-Provider';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//       <AuthProvider>
//         <App />
//       </AuthProvider>
//   </BrowserRouter>
// );
// const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
