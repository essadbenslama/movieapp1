import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import{BrowserRouter,Routes,Route}from 'react-router-dom';
import { Details } from './component.js/Details';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Routes>
<Route path='/' element= {<App />}   />
<Route path='/Details/:id' element ={<Details/>}/>
</Routes>
</BrowserRouter>

   

);


