import React, { useEffect, useState } from 'react'
import User from '../modals/User';

const Register = () => {

  const [formValues,setFormValues] = useState(new User());
  const [formErrors,setFormErrors] = useState({});
  const [isSubmit,setIsSubmit] = useState(false);
  const [tempData,setTempData] = useState(formValues);

  const [db,setDb] = useState([]);

  const changeHandler = (e) =>{
    const {name,value} = e.target;
    setFormValues({...formValues,[name]:value});
  };

  const submitHandler = (e) =>{
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    
  }

  useEffect(()=>{
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formValues); 

      setTempData(formValues);
      const data = [...db];
      data.push(formValues);
      setDb(data);

      alert('register successfull');
    }
    setFormValues({
      firstName : "",
      lastName : "",
      email: ""
    });
  },[formErrors]);

  const validate = (values) =>{
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
    if(!values.firstName){
      errors.firstName = "Firstname is required!";
    }else if( values.firstName <4 && values.firstName > 12){
      errors.firstName = "FirstName not exceed max 12 characters";
    }


    if(!values.lastName){
      errors.lastName = "Lastname is required!";
    }else if(values.lastName < 4 && values.lastName > 12){
      errors.firstName = "LastName not exceed max 12 characters";
    }

    if(!values.email){
      errors.email = "Email is required!";
    }else if(!regex.test(values.email)){
      errors.email = "Enter a valid email";
    }
    return errors;
  }


  return (
    <div className='container-fluid bg-light pb-5 p-5 '>
      <h1 className='display-4 p-5 App'> Task : Registration form</h1>
      
      <div className='row pb-5'>
        <div className='col-sm-10 col-md-5 offset-md-3 col-lg-4 offset-md-4'>
        <div>
            <form onSubmit={submitHandler} className="row card pt-3 pb-3 " >
            <div>
              {Object.keys(formErrors).length === 0 && isSubmit ? (
                  <div id="suces" className="card text-success bg-light col-md-6 col-lg-6 mt-4 offset-3 App"> 
                    <b>Register successful</b></div>
                  ) : ( " "
              )}
            </div>
            <div className="col-10 mt-4 offset-1">
                <label htmlFor="firstName" className=" form-label h6">First Name:</label>
                <input type="text" 
                    className=" form-control" 
                    id="firstName" 
                    name="firstName"
                    value={formValues.firstName}
                    autoComplete="off"
                    onChange={changeHandler}/>
                  <p className="text-danger ">{formErrors.firstName}</p>
             </div>
            
             <div className="col-10  offset-1">
                <label htmlFor="lastName" className=" form-label h6">Last Name:</label>
                <input type="text" 
                    className=" form-control" 
                    id="lastName"   
                    name="lastName"
                    value={formValues.lastName}
                    autoComplete="off"
                    onChange={changeHandler}/>
                  <p className="text-danger">{formErrors.lastName}</p>
             </div>
             
            <div className="col-10  offset-1">
                <label htmlFor="email" className=" form-label h6">Email:</label>
                <input type="email" 
                    className=" form-control" 
                    id="email" 
                    name="email"
                    value={formValues.email}
                    autoComplete="off"
                    onChange={changeHandler}/>
                  <p className="text-danger">{formErrors.email}</p>
             </div>
              <div className='row offset-4'>
                 <input className='btn btn-primary mb-3 col-4' type="submit" value="Register"/>
              </div>
            </form>
            </div>
            <div className='mt-4'>
               {db.map((item,index)=>{
                    return(
                      <div className='row card mt-2 mb-2 card-body' key={index}>
                         FirstName : {item.firstName} <br/>
                         LastName : {item.lastName} <br/>
                         Email : {item.email} <br/>
                      </div>
                    
                )})}
            </div>
            
        </div>
        
      </div>
    
    </div>
  )
}

export default Register;