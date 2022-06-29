import './App.css';
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './routes/Home';
import Register from './routes/Register';
import ResponseNavbar from './routes/ResponseNavbar';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/responsenavbar' element={<ResponseNavbar/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
