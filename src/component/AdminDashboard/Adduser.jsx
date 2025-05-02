import React from 'react';
import { useState } from 'react';
const backendUrl = import.meta.env.VITE_BACKEND_URL;

function Adduser() {

  const [user, setuser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    role:""
  })


  function handlechange(e) {
    const { name, value } = e.target;

    setuser((pre) => ({
      ...pre,
      [name]: value
    }))
  }
  async function handlesubmit(e) {
    e.preventDefault()

    const data = await fetch(`${backendUrl}/Dashboard/Adduser`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',

      },
      body: JSON.stringify(user)
    })
  }

  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <form onSubmit={handlesubmit} className="border border-dark rounded p-4 bg-info">
            <h4 className="text-center text-white mb-4">Add New User</h4>

            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" name="username" placeholder="Username" className="form-control" onChange={handlechange} />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" name='email' placeholder="Email" className="form-control" onChange={handlechange} />
            </div>

            <div className="mb-3">
              <label htmlFor="number" className="form-label">Phone Number</label>
              <input type="tel" name='phone' placeholder="Number" className="form-control" onChange={handlechange} />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" name='password' placeholder="Password" className="form-control" onChange={handlechange} />
            </div>


            <div className="mb-3">
              <label htmlFor="role" className="form-label">Role</label>
              <select
                name="role"
                className="form-select"
                onChange={handlechange}
                defaultValue=""
              >
                <option value="" disabled>Select a role</option>
                <option value="admin">Admin</option>
                <option value="customer">Customer</option>
                <option value="seller">Seller</option>
              </select>
            </div>
            <button type="submit" className="btn btn-success w-100">Add New User</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Adduser;
