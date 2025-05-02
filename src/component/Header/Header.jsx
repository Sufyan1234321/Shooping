import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
export default function Header() {
   
       
  
  const [search, setSearch] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus = () => {
      const user = localStorage.getItem('user');
      setIsLoggedIn(!!user); // true if user exists
    };

    checkLoginStatus(); // Initial check

    // 🔁 Listen for login/logout events
    window.addEventListener('userStatusChanged', checkLoginStatus);

    return () => {
      window.removeEventListener('userStatusChanged', checkLoginStatus);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user'); // Clear user data
    setIsLoggedIn(false); // Update the state
    navigate('/login'); // Redirect to login page
  };
  function handleinputChange(e) {
    setSearch(e.target.value)
  }
  const handleClick = () => {
    navigate(`/search?query=${encodeURIComponent(search)}`);
  };
  return (
    <header className="container-fluid bg-dark text-white py-3 mb-3 position-sticky top-0 z-1">
      <div className="row align-items-center text-center">
        {/* Logo Section */}
        <div className="col-12 col-md-3 text-md-center mb-2 mb-md-0">
          <h1><Link to="/" className='text-decoration-none text-white'>Shopping</Link></h1>
        </div>

        {/* Search Bar */}
        <div className="col-12 col-md-5 d-flex justify-content-center mb-3 mb-md-0">
          <div className="input-group w-100 w-md-75">
            <input className="form-control" type="text" placeholder="Search..." onChange={handleinputChange} />
            <button onClick={handleClick} className="btn btn-primary">
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>

        {/* Buttons & Cart Section */}
        <div className="col-12 col-md-4 text-center text-md-end d-flex flex-wrap justify-content-center justify-content-md-end gap-2">
          {isLoggedIn ? (
            <button onClick={handleLogout} className="btn btn-primary">
              Logout
            </button>
          ) : (
            <Link to="/login" className="btn btn-success text-white">Login</Link>
          )}
          <span className="Light Blue px-3 py-1 rounded-pill">
            <i className="bi bi-cart"></i><Link to="/Cart">{}Cart</Link> 
            
          </span>
          <span className="Light Blue px-3 py-1 rounded-pill">
            <i className="bi bi-credit-card"></i> Checkout
          </span>
        </div>
      </div>
    </header>
  );
}
