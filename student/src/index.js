import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login';
import reportWebVitals from './reportWebVitals';
import Generalinfo from './componets/student/Generalinfo';
import Homeadmin from './componets/admin/Homeadmin';
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
      <Route path="Generalinfo" element={<Generalinfo />} />
      <Route path="Homeadmin" element={<Homeadmin />} />

    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


reportWebVitals();
