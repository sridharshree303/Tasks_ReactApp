import React, { useEffect, useState } from 'react';
import { UserService } from '../services/UserServices';

const SearchKeys = () => {


  let [data,setData] = useState({
    searchKey : '',
    loading:false,
    users:[],
    fUsers : [],
    errorMessage:null
  });

  useEffect(()=>{
    async  function fetchdata(){
        try{
            setData({...data,loading:true });
            let response = await UserService.getAllUsers();
            let {results} = response.data;
            setData({...data,
                users:results,
                fUsers:results,
                loading:false
            })
        }catch(error){
            setData({
                ...data,
                loading:false,
                errorMessage:error
            })
        }
    }
    fetchdata();
  },[]);

  const changeHandler = (e) =>{
    let filteredUsers = data.fUsers.filter(user =>{
        return user.name.first.toLowerCase().includes(e.target.value.toLowerCase());
    })
    setData({...data,users : filteredUsers,searchKey:e.target.value})
  };
  
  return (
    <div  style={{"backgroundColor":"gray"}}>
      <div className='container App'>
        <div className='row pt-4'>
            <div className='col-lg-12'>
                 <div className='card shadow-lg'>
                    <div className='card-header bg-dark text-light p-3 text-white text-center'>
                        <h4 className='display-6'> Task : Search Keys</h4>
                        <form className='row col-6 offset-3 p-2'>
                            <input 
                                name="searchKey"
                                value={data.searchKey}
                                onChange={changeHandler}
                                type="text" id='searchsize' className="form-control"
                                placeholder='Search name' />
                            
                        </form>
                    </div>
                    <div className='card-body bg-light' id='card-body'>
                        <ul className='list-group'>
                        <div className='row shadow-lg'>
                           {
                            data.users.length>0  && data.users.map((user,index) =>{
                                return(
                                        <div className='col-lg-4 pb-3 ' key={index}>
                                            <li className='list-group-item' key={user.login.uuid}>
                                            <div className='row p-2'>

                                                <div className='col-sm-9'>
                                                <p className='h6'>{user.name.title}. {user.name.first} {user.name.last}</p>
                                                <small>{user.location.city} , {user.location.country}</small>
                                                    <p>{user.email}</p>
                                                </div>
                                                <div className='col-sm-3 pt-2 '>
                                                    <img src={user.picture.medium} alt={user.thumbnail} className='img-fluid rounded-pill'/>
                                                </div>
                                            </div>
                                            </li>
                                        </div>
                                    
                                    )
                                })
                           }
                           </div>
                        </ul>
                    </div>
                 </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SearchKeys;


{ <li className='list-group-item'>
    <div className='row'>
        <div className='col-sm-3'>
            <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png' className='img-fluid'/>
        </div>
        <div className='col-sm-8'>
            <p className='h5'>Kolluru Sridhar</p>
            <small>Andhra Pradesh, INDIA</small>
        </div>
    </div>
</li>}