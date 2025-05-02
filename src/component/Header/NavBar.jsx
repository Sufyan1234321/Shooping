import { Link } from 'react-router-dom'
export default function NavBar() {
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark container-fluid">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav w-100 justify-content-center">

                            {/* Men's Dropdown */}
                            <li className="nav-item dropdown me-4 text-white">
                                <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMen" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Men's
                                </a>
                                <ul className="dropdown-menu position-absolute start-50 translate-middle-x text-center" aria-labelledby="navbarDropdownMen">
                                    <div className="d-flex">
                                        {/* Men's Top Wear */}
                                        <span style={{ width: "200px" }} className="border-end me-1 text-center">

                                            <h6><li><Link to="/MensWear" className="dropdown-item" >Men's Top Wear</Link></li></h6>

                                            <li><Link to="/mens/T-Shirt" className="dropdown-item" >T-Shirt</Link></li>

                                            <li><Link to="/mens/Casual Shirts" className="dropdown-item" href="#">Casual Shirts</Link></li>

                                            <li><Link to="/mens/Shirts" className="dropdown-item" href="#">Shirts</Link></li>

                                            <li><Link to="/mens/Kurta" className="dropdown-item" href="#">Kurta</Link></li>

                                            <li><Link to="/mens/Formal Shirt" className="dropdown-item" href="#">Formal Shirt</Link></li>

                                            <li><Link to="/mens/Hoodies" className="dropdown-item" href="#">Hoodies</Link></li>
                                        </span>

                                        {/* Men's Bottom Wear */}
                                        <span style={{ width: "200px" }} className="border-start me-1 text-center">
                                            <h6 className="container-fluid text-center">Men's Bottom Wear</h6>

                                            <li><Link to="/mens/Shorts" className="dropdown-item" href="#">Shorts</Link></li>

                                            <li><Link to="/mens/Jeans" className="dropdown-item" href="#">Jeans</Link></li>

                                            <li><Link to="/mens/Cargo Pants" className="dropdown-item" href="#">Cargo Pants</Link></li>

                                            <li><Link to="/mens/Kurta Pajama Bottoms" className="dropdown-item" href="#">Kurta Pajama Bottoms</Link></li>

                                            <li><Link to="/mens/Track Pants" className="dropdown-item" href="#">Track Pants</Link></li>

                                            <li><Link to="/mens/Dhoti" className="dropdown-item" href="#">Dhoti</Link></li>

                                        </span>
                                    </div>
                                </ul>
                            </li>

                            {/* Women's Dropdown */}
                            <li className="nav-item dropdown me-4 text-white">
                                <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownWomen" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Women's
                                </a>
                                <ul className="dropdown-menu position-absolute start-50 translate-middle-x text-center" aria-labelledby="navbarDropdownWomen">
                                    <div className="d-flex">
                                        {/* Women's Top Wear */}
                                        <span style={{ width: "200px" }} className="border-end me-1 text-center">
                                            <h6 className="container-fluid text-center">Women's Top Wear</h6>

                                            <li><Link to="/womens/Soft Cotton Kurtis" className="dropdown-item" href="#">Soft Cotton Kurtis                                            </Link></li>

                                            <li><Link to="/womens/Linen & Chanderi Tops" className="dropdown-item" href="#">Linen & Chanderi Tops</Link></li>

                                            <li><Link to="/womens/Stretchy Indo-Western Tops" className="dropdown-item" href="#">Stretchy Indo-Western Tops</Link></li>

                                            <li><Link to="/womens/Slouchy Angrakha & Wrap Tops" className="dropdown-item" href="#">Slouchy Angrakha & Wrap Tops</Link></li>

                                            <li><Link to="/womens/Patiala Suit Tops with Elastic Waists" className="dropdown-item" href="#">Patiala Suit Tops with Elastic Waists</Link></li>

                                            <li><Link to="/womens/Nightwear-Inspired Ethnic Tops" className="dropdown-item" href="#">Nightwear-Inspired Ethnic Tops</Link></li>

                                        </span>

                                        {/* Women's Bottom Wear */}
                                        <span style={{ width: "200px" }} className="border-start me-1 text-center">
                                            <h6 className="container-fluid text-center">Women's Bottom Wear</h6>
                                            <li><Link to="/womens/Leggings" className="dropdown-item" href="#">Leggings</Link></li>

                                            <li><Link to="/womens/Jeans" className="dropdown-item" href="#">Jeans</Link></li>

                                            <li><Link to="/womens/skirt" className="dropdown-item" href="#">Skirts</Link></li>

                                            <li><Link to="/womens/Palazzos" className="dropdown-item" href="#">Palazzos</Link></li>

                                            <li><Link to="/womens/Jeggings" className="dropdown-item" href="#">Jeggings</Link></li>

                                            <li><Link to="/womens/dresses" className="dropdown-item" href="#">Dresses</Link></li>

                                        </span>
                                    </div>
                                </ul>
                            </li>









                            {/* Kid's Section */}
                            <li className="nav-item dropdown me-4 text-white">
                                <a
                                    className="nav-link dropdown-toggle text-white"
                                    href="#"
                                    id="navbarDropdownWomen"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Kid
                                </a>

                                <ul
                                    className="dropdown-menu position-absolute start-50 translate-middle-x text-center"
                                    aria-labelledby="navbarDropdownWomen"
                                >
                                    <div className="d-flex">
                                        {/* Kid Wear Column */}
                                        <div style={{ width: "250px" }} className="me-1 text-start px-3">
                                            <h6 className="text-dark fw-bold border-bottom pb-1">Kid Wear</h6>

                                            {/* Ethnic Wear */}
                                            <li className="dropdown-header fw-semibold">Ethnic Wear</li>
                                            <li className="dropdown-item-text">
                                                <strong>For Boys</strong>
                                                <ul className="list-unstyled ms-2">
                                                    <li><Link to='/kids/Kurta Pajama' className="dropdown-item" href="#">Kurta Pajama</Link></li>
                                                    <li><Link to='/kids/Sherwani' className="dropdown-item" href="#">Sherwani</Link></li>

                                                    <li><Link to='/kids/Dhoti Kurta' className="dropdown-item" href="#">Dhoti Kurta</Link></li>

                                                    <li><Link to='/kids/Nehru Jacket'  className="dropdown-item" href="#">Nehru Jacket sets</Link></li>
                                                </ul>

                                                
                                            </li>

                                            {/* Ethnic Wear */}
                                            
                                        </div>

                                        <div>
                                            <li className="dropdown-header fw-semibold">Party Wear</li>
                                            
                                            <li className="dropdown-item-text">

                                                <ul className="list-unstyled ms-2">
                                                    

                                                    <strong>For Girls</strong>

                                                    <li><Link to='/kids/Party Frock' className="dropdown-item" href="#"> Party Frock</Link></li>

                                                    <li><Link to='/kids/Gowns' className="dropdown-item" href="#">Gowns</Link></li>

                                                    <li><Link to='kids/Sequined Dresses' className="dropdown-item" href="#"> Sequined Dresses</Link></li>

                                                    <li><Link to='/kids/Tutu Skirts' className="dropdown-item" href="#">Tutu Skirts</Link></li>

                                                </ul>


                                            </li>
                                        </div>
                                    </div>
                                </ul>
                            </li>








                            {/* Computers & Accessories Section */}
                            <li className="nav-item dropdown me-4 text-white">
                                <a
                                    className="nav-link dropdown-toggle text-white"
                                    href="#"
                                    id="navbarDropdownComputers"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Computers & Accessories
                                </a>

                                <ul
                                    className="dropdown-menu position-absolute start-50 translate-middle-x text-center"
                                    aria-labelledby="navbarDropdownComputers"
                                >
                                    <div className="d-flex px-3">

                                        {/* Laptops & Desktops */}
                                        <div style={{ width: "220px" }} className="text-start me-3">
                                            <h6 className="fw-bold border-bottom pb-1">Laptops & Desktops</h6>

                                            <li><Link to="/computerAndAccessories/Laptops" className="dropdown-item" href="#">Laptops</Link></li>

                                            <li><Link to="/computerAndAccessories/Gaming Laptops" className="dropdown-item" href="#">Gaming Laptops</Link></li>

                                            <li><Link to="/computerAndAccessories/Desktops" className="dropdown-item" href="#">Desktops</Link></li>

                                            <li><Link to="/computerAndAccessories/All-in-One PCs" className="dropdown-item" href="#">All-in-One PCs</Link></li>

                                        </div>

                                        {/* Components */}
                                        <div style={{ width: "220px" }} className="text-start me-3">
                                            <h6 className="fw-bold border-bottom pb-1">Computer Components</h6>

                                            <li><Link to="/computerAndAccessories/Processors" className="dropdown-item" href="#">Processors</Link></li>

                                            <li><Link to="/computerAndAccessories/Motherboards" className="dropdown-item" href="#">Motherboards</Link></li>

                                            <li><Link to="/computerAndAccessories/RAM " className="dropdown-item" href="#">RAM</Link></li>

                                            <li><Link to="/computerAndAccessories/Graphics Cards" className="dropdown-item" href="#">Graphics Cards</Link></li>

                                            <li><Link to="/computerAndAccessories/Power Supply Units" className="dropdown-item" href="#">Power Supply Units</Link></li>

                                        </div>

                                        {/* Accessories */}
                                        <div style={{ width: "220px" }} className="text-start me-3">
                                            <h6 className="fw-bold border-bottom pb-1">Accessories</h6>

                                            <li><Link to="/computerAndAccessories/Keyboards & Mice" className="dropdown-item" href="#">Keyboards & Mice</Link></li>

                                            <li><Link to="/computerAndAccessories/Monitors" className="dropdown-item" href="#">Monitors</Link></li>

                                            <li><Link to="/computerAndAccessories/Webcams" className="dropdown-item" href="#">Webcams</Link></li>

                                            <li><Link to="/computerAndAccessories/Speakers & Headphones" className="dropdown-item" href="#">Speakers & Headphones</Link></li>

                                            <li><Link to="/computerAndAccessories/UPS & Surge Protectors" className="dropdown-item" href="#">UPS & Surge Protectors</Link></li>

                                        </div>

                                        {/* Storage & Networking */}
                                        <div style={{ width: "220px" }} className="text-start">
                                            <h6 className="fw-bold border-bottom pb-1">Storage & Networking</h6>

                                            <li><Link to="/computerAndAccessories/External Hard Drives" className="dropdown-item" href="#">External Hard Drives</Link></li>

                                            <li><Link to="/computerAndAccessories/SSD Drives" className="dropdown-item" href="#">SSD Drives</Link></li>

                                            <li><Link to="/computerAndAccessories/Pen Drives" className="dropdown-item" href="#">Pen Drives</Link></li>

                                            <li><Link to="/computerAndAccessories/WiFi Routers" className="dropdown-item" href="#">WiFi Routers</Link></li>

                                            <li><Link to="/computerAndAccessories/Networking Cables" className="dropdown-item" href="#">Networking Cables</Link></li>

                                        </div>

                                    </div>
                                </ul>
                            </li>


                            {/* Home & Appliances Section */}
                            <li className="nav-item dropdown me-4 text-white">
                                <a
                                    className="nav-link dropdown-toggle text-white"
                                    href="#"
                                    id="navbarDropdownHome"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Home & Appliances
                                </a>

                                <ul
                                    className="dropdown-menu position-absolute start-50 translate-middle-x text-center"
                                    aria-labelledby="navbarDropdownHome"
                                >
                                    <div className="d-flex px-3">

                                        {/* Kitchen Appliances */}
                                        <div style={{ width: "220px" }} className="text-start me-3">
                                            <h6 className="fw-bold border-bottom pb-1">Kitchen Appliances</h6>

                                            <li><Link to="/appliances/Mixer Grinders" className="dropdown-item">Mixer Grinders</Link></li>
                                            <li><Link to="/appliances/Microwave Ovens" className="dropdown-item">Microwave Ovens</Link></li>
                                            <li><Link to="/appliances/Coffee Makers" className="dropdown-item">Coffee Makers</Link></li>
                                            <li><Link to="/appliances/Toasters" className="dropdown-item">Toasters</Link></li>
                                            <li><Link to="/appliances/Chimneys" className="dropdown-item">Chimneys</Link></li>
                                        </div>

                                        {/* Home Essentials */}
                                        <div style={{ width: "220px" }} className="text-start me-3">
                                            <h6 className="fw-bold border-bottom pb-1">Home Essentials</h6>
                                            <li><Link to="/appliances/Water Purifiers" className="dropdown-item">Water Purifiers</Link></li>

                                            <li><Link to="/appliances/Air Conditioners" className="dropdown-item">Air Conditioners</Link></li>

                                            <li><Link to="/appliances/Fans" className="dropdown-item">Fans</Link></li>
                                            <li><Link to="/appliances/Iron Boxes" className="dropdown-item">Iron Boxes</Link></li>
                                            <li><Link to="/appliances/Washing Machines" className="dropdown-item">Washing Machines</Link></li>
                                        </div>

                                        {/* Smart Devices */}
                                        <div style={{ width: "220px" }} className="text-start">
                                            <h6 className="fw-bold border-bottom pb-1">Smart Devices</h6>
                                            <li><Link to="/appliances/Smart Lights" className="dropdown-item">Smart Lights</Link></li>
                                            <li><Link to="/appliances/Smart Plugs" className="dropdown-item">Smart Plugs</Link></li>
                                            <li><Link to="/appliances/Smart Assistants" className="dropdown-item">Smart Assistants</Link></li>
                                            <li><Link to="/appliances/Robot Vacuums" className="dropdown-item">Robot Vacuums</Link></li>
                                        </div>

                                    </div>
                                </ul>
                            </li>



                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
