import { useEffect, useState } from "react";
import { useNavigate , Link } from "react-router-dom";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

function Login() {
  const navigate = useNavigate();
  const [loginUser, setLoginUser] = useState({
    username: "",
    password: ""
  });


   
  const handleSubmit = async (e) => {
    e.preventDefault();



    
    const res = await fetch(`${backendUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginUser),
    });

    const data = await res.json();
    console.log(data);

    if (res.ok) {
      //alert("Login Successful ✅");
      localStorage.setItem("user", JSON.stringify(data));
      window.dispatchEvent(new Event("userStatusChanged")); 
      
      // 🔥 trigger event for Header

      
      if (data.user.role === "admin") {
        navigate("/dashboard");
      } else {
        navigate("/");
      }
    } else {
      alert("Login Failed ❌: " + data.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container border border-2 rounded-3 p-4 my-5 w-25"
    >
      <h4 className="text-center">Login</h4>

      <div className="mb-3">
        <label htmlFor="username" className="form-label">Username</label>
        <input
          type="text"
          placeholder="Username"
          name="username"
          id="username"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-success w-100">
        Login
      </button>
      <div>
        <p className="text-center fs-5 fw-bold mt-3">new user?</p>
        <strong className="btn btn-primary  text-black text-center w-100"> <Link to="/SignUp" className="text-black text-decoration-none fs-5 ">SignUP</Link> </strong>
      </div>
          
    </form>
  ); 
}

export default Login;
