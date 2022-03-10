import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import Post from './components/Post';
import Registrarse from './components/Registrarse';
import Nosotros from './components/Nosotros';
import 'bootstrap/dist/css/bootstrap.min.css';

const routing =(
  <Router>
    <React.StrictMode>
        <Header/>
        <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="/posts/:postId" element={<Post />}></Route>
            <Route path="/registrarse" element={<Registrarse />}></Route>
            <Route path="/nosotros" element={<Nosotros />}></Route>
        </Routes>
        <Footer/>
    </React.StrictMode>
  </Router>
);


ReactDOM.render(routing, document.getElementById('root'));
