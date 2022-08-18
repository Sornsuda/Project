import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login';
import reportWebVitals from './reportWebVitals';
import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Home';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="home" element={<Home />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


reportWebVitals();
