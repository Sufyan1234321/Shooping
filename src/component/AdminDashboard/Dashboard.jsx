import React, { useState, useEffect } from "react";
//import{useState,useEffect} from 'react'
import { Outlet, Link, useNavigate } from "react-router-dom";
function Dashboard() {
    const navigate = useNavigate()

    const [user, setuser] = useState({
        username: "",
        role: ""
    })

    useEffect(() => {
        const getuser = localStorage.getItem('user');

        if (getuser) {
            try {
                const parsedata = JSON.parse(getuser);
                if (parsedata && parsedata.user) {
                    setuser(parsedata.user);

                    // Redirect if role is not allowed
                    if (parsedata.user.role !== 'admin' && parsedata.user.role !== 'user') {
                        navigate('/login');
                    }
                } else {
                    navigate('/login');
                }
            } catch (error) {
                console.error("Failed to parse user:", error);
                navigate('/login');
            }
        } else {
            navigate('/login');
        }
    }, []);


    return (
        <React.Fragment>

            <div className="row mt-5 border rounded">
                {/* Sidebar */}
                <div className="col-12 col-md-3 mb-4 ">
                    <div className="bg-info text-white p-3 border border-primary rounded w-100 mb-2">
                        {/* Collapsible Toggle */}
                        <button
                            className="btn btn-info w-100 text-start text-black fs-5 fw-bold"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#userManagementCollapse"
                            aria-expanded="false"
                            aria-controls="userManagementCollapse"
                        >
                            User Management
                        </button>

                        {/* Collapsible Menu */}
                        <div className="collapse mt-2 w-100" id="userManagementCollapse">
                            <ul className="list-unstyled m-0">
                                <li className="mb-2 w-100">
                                    <Link to="Adduser" className="text-black fs-5 fw-bold text-decoration-none d-block w-100 bg-primary p-2 rounded">Add User</Link>
                                </li>
                                <li className="mb-2 w-100">
                                    <Link to="Deleteuser" className="text-black  fs-5 fw-bold text-decoration-none d-block w-100 bg-primary p-2 rounded">Deleteuser</Link>
                                </li>
                                <li className="mb-2 w-100">
                                    <Link to="Edituser" className="text-black fs-5 fw-bold text-decoration-none d-block w-100 bg-primary p-2 rounded">Edit User</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-info text-black p-3 rounded w-100 mb-2 border border-primary">
                        {/* Collapsible Toggle */}
                        <button
                            className="btn btn-info w-100 text-start text-black fs-5 fw-bold"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#orderManagementCollapse"
                            aria-expanded="false"
                            aria-controls="orderManagementCollapse"
                        >
                            order Management
                        </button>

                        {/* Collapsible Menu */}
                        <div className="collapse mt-2 w-100" id="orderManagementCollapse">
                            <ul className="list-unstyled m-0">
                                <li className="mb-2 w-100">
                                    <Link to="" className="text-black text-decoration-none fs-5 fw-bold d-block w-100 bg-primary p-2 rounded">Add User</Link>
                                </li>
                                <li className="mb-2 w-100">
                                    <Link to="" className="text-black fs-5 fw-bold text-decoration-none d-block w-100 bg-primary p-2 rounded">Remove User</Link>
                                </li>
                                <li className="mb-2 w-100">
                                    <Link to="" className="text-black  fs-5 fw-bold text-decoration-none d-block w-100 bg-primary p-2 rounded">Edit User</Link>
                                </li>
                            </ul>
                        </div>
                    </div>



                    {/* product Management */}


                    <div className="w-100 bg-info text-start p-3 rounded border border-primary ">
                        <button
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#productmanagment"
                            className="btn btn-info w-100 text-start text-black fs-5 fw-bold">


                            Product Management

                        </button>

                        <div className="collapse" id="productmanagment">
                            <ul className="list-unstyled m-0">
                                <li className="w-100  mb-2">
                                    <Link to="Addproduct" className="text-black text-decoration-none fs-5 fw-bold d-block w-100 bg-primary p-2 rounded">
                                        add product
                                    </Link>
                                </li>

                                <li className="w-100 mb-2">
                                    <Link to="deleteproduct" className="text-black text-decoration-none fs-5 fw-bold d-block w-100 bg-primary p-2 rounded">
                                        delete product
                                    </Link>

                                </li>
                                <li className="w-100 mb-2">
                                    <Link to="editproduct" className="text-black text-decoration-none fs-5 fw-bold w-100 bg-primary rounded d-block p-2">
                                       edit product
                                    </Link>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>




                {/* Main Content */}
                <div className="col-12 col-md-9">
                    <h4 className="text-center border border-dark rounded bg-info">welcome {user.username} you are {user.role} of this application</h4>
                    <Outlet />
                </div>
            </div>
        </React.Fragment>
    );
}

export default Dashboard;
