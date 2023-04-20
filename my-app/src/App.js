import logo from './logo.svg';
import React from "react"
import Header from './Components/Header'
import './App.css';
import Home from './Components/Home';
import Footer from './Components/Footer';
// import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Product from './Components/Product';
import Login from './Components/Login';
import Register from './Components/Register';
import ResetPassword from './Components/ResetPassword';
import Error from './Components/Error';
import MenProduct from './Components/MenProduct';
import Something from './Components/Something';
import Book from './Components/Book';

function App() {
  return (
    <>
      
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          {/* <Route exact path='/books/:title' element={<Product/>} /> */}
          {/* <Route exact path='/books/:title' element={<Product/>} /> */}
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path="/something/:id" element={<Something />} />
          <Route exact path="/books/:title" element={<Book />} />
          {/* <Route exact path='/men/:id' element={<Men />} /> */}
          <Route exact path='/resetPassword' element={<ResetPassword />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </Router>

      {/* <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/books/:title' element={<MenProduct/>} />

        </Routes>
      </Router> */}
      
      
    </>
  );
}

export default App;
