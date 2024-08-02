import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './context/Authcontext.jsx'
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')).render(
 <AuthProvider>
   <ChakraProvider>
   <BrowserRouter>
    <App />
    </BrowserRouter>

   </ChakraProvider>
  
 </AuthProvider>
   
 
)
