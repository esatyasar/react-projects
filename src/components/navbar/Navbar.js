import React from 'react'
import './Navbar.css';

function Navbar() {
    return (
        <div>
            <div className = "container-fluid ">
                <div className = "row">
                    <ul className= "col-12 list-inline d-flex bg-dark navbar-container">
                        <li className="list-inline-item">
                            About Us
                        </li>
                        <li className="list-inline-item">
                            For you
                        </li>
                        <li className="list-inline-item">
                            Services
                        </li>
                        <li className="list-inline-item">
                            Blog
                        </li>
                        <li className="list-inline-item">
                            Vlog
                        </li>
                        <li className="list-inline-item">
                            Contact
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
