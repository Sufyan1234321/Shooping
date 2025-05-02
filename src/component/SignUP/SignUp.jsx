
import { useState } from 'react'
import React from 'react'
import {useNavigate , Link} from 'react-router-dom'
const backendUrl = import.meta.env.VITE_BACKEND_URL;

 function SignUp() {
const navigate = useNavigate()
    const [Signupuser , setSignupuser] = useState({

        username:"",
        email:"",
        number:"",
        password:""

    })
     async function  handlesubmit(e){
        e.preventDefault()

        const response = await fetch(`${backendUrl}/SignUp`,{
            method:"POST",
            headers:{
                'content-type':"application/json"
            },
            body: JSON.stringify(Signupuser)
        })
             const data = await response.json();
               if (response.ok) {
               alert(data.message || "Signup successful!");
               } else {
               alert(data.message || "Something went wrong");
              }
              navigate('/')
     }
      function handlchange(e){
        const {name, value} = e.target
        setSignupuser((pre)=>({
            ...pre,
            [name]: value
        }))
      }
  return (
    <>
      


      <form onSubmit={handlesubmit} className='container w-25 mt-2 border border-3 rounded-3'>
         <h4 className='text-center hr'>SignUp</h4>
        <div className='m-2'>
            <label htmlFor="username" className='form-lable'>username</label>
            <input type="text" className='form-control' name='username' id='username' placeholder='username' onChange={handlchange} />
        </div>

        <div className='m-2'>
            <label htmlFor="email" className='form-lable'>email</label>
            <input type="email" className='form-control' name='email' id='email'placeholder='email' onChange={handlchange}/>
        </div>

         <div className='m-2'>
            <label htmlFor="number" className='form-lable'>number</label>
            <input type="tel" className='form-control' placeholder='number' name='number' onChange={handlchange}/>
         </div>

          <div className='m2'>
            <label htmlFor="password" className='form-lable'>password</label>
            <input type="password" className='form-control' placeholder='password' name='password' id='password' onChange={handlchange}/>
          </div>
          <button type='submit' className='btn btn-primary w-100 mt-4 '>SignUp</button>

          <div>
        <p className="text-center fs-5 fw-bold mt-2">Existing user?</p>
        <strong className="btn btn-primary  text-black text-center w-100"> <Link to="/login" className="text-black text-decoration-none fs-5 ">login</Link> </strong>
      </div>
      </form>
    </>
  )
} 
export default SignUp