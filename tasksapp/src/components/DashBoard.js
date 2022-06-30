import React from 'react';
import Headerone from '../routes/Headerone';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';

const DashBoard = () => {
  return (
    <div className='App'>
      <div >
        <Headerone/>
      </div>
      
      <div id='con_manual'>
      <div className='text-center'>
            <h2>DashBoard Component</h2>
      </div>
        <div className='card border align-items-left' id='breadcrumb'>
            <Breadcrumb>
                <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>DashBoard</Breadcrumb.Item>
            </Breadcrumb>
        </div>
        <div>
            <div className='pt-2 text-center'>
                <Link to="/" ><button type="button" className="btn btn-warning btn-sm ">Main</button></Link> 
                &nbsp; &nbsp;
                <Link to="/home"><button type="button" className="btn btn-primary btn-sm ">Home</button></Link> 
                &nbsp; &nbsp;
            </div>
        </div>
      </div>
    </div>
  )
}

export default DashBoard;
