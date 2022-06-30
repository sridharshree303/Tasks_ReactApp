import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className='container App'>
      <h1 className='display-3 m-4 text-center'> Home Page </h1>
      <div className='pt-3 text-center'>
        <Link to="/register" ><button type="button" className="btn btn-info btn-sm ">Registration Form</button></Link> 
        &nbsp; &nbsp;
        <Link to="/responsenavbar" ><button type="button" className="btn btn-warning btn-sm ">Responsive Navbar</button></Link> 
      </div>
    </div>
  )
}

export default Home
