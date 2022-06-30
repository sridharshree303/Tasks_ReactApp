import './App.css';
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './routes/Home';
import Register from './routes/Register';
import ResponseNavbar from './routes/ResponseNavbar';
import Products from './components/Products';
import Services from './components/Services';
import DashBoard from './components/DashBoard';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/responsenavbar' element={<ResponseNavbar/>}/>
          <Route path='/home' element={<ResponseNavbar/>}/>
          <Route path='/responsenavbar/products' element={<Products/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/dashboard' element={<DashBoard/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
