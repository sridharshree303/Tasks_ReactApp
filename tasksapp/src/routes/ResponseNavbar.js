import React from 'react';
import { Link } from 'react-router-dom';
import Headerone from './Headerone';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const ResponseNavbar = () => {
  return (
    <div className='App'>
      <div >
        <Headerone/>
      </div>
      
      <div id='con_manual'>
      <div className='text-center'>
            <h2>Home Page </h2>
      </div>
        <div className='card border align-items-left' id='breadcrumb'>
            <Breadcrumb>
                <Breadcrumb.Item active>Home</Breadcrumb.Item>
               
            </Breadcrumb>
        </div>
        <div>
            <div className='pt-2 text-center'>
                <Link to="/" ><button type="button" className="btn btn-primary btn-sm ">Main Page</button></Link> 
                &nbsp; &nbsp;
            </div>
        </div>
      </div>
    </div>
  )
}

export default ResponseNavbar;