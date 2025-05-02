import React from 'react'
import { useState } from 'react';
const backendUrl = import.meta.env.VITE_BACKEND_URL;
function Deleteuser() {
  

   const [deleteuser , setDeleteuser]= useState({
    username:"",
    email:""
   })

   function handlechange(e){
   const {name , value} = e.target;

   setDeleteuser((pre)=>({
           ...pre,
           [name]: value
   }))

   
   }

   async function handlesubmit(e){
    e.preventDefault();
    const res = await fetch(`${backendUrl}http://localhost:3000/Dashboard/deleteuser`,{
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(deleteuser)
    })
}
  return (
    <>
        <form onSubmit = {handlesubmit} className='container w-50 border border-dark rounded bg-info'>

             <div>
               <label htmlFor="username" className='form-label'>username</label>
               <input type="text" name='username' placeholder='username' className='form-control mb-3'  onChange={handlechange}/>
             </div>
             <div>
               <label htmlFor="email" className='form-label'>email</label>
               <input type="email" name='email' placeholder='email' className='form-control mb-3'  onChange={handlechange}/>
             </div>
             <button type='submit' className='btn btn-primary mb-3 w-100'>delete user</button>
        </form>
    </>
  )
}
export default Deleteuser;