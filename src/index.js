import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Inicio from './components/Inicio'
import Proyectos from './components/Proyectos'
import Home from './components/Home'
import Projects from './components/Projects'
import './index.css';

ReactDOM.render(
  <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
        </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);
