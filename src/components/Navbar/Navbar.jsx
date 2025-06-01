import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 20) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <>
        <nav className={`navbar navbar-expand-lg bg-main fixed-top ${scrolled ? "scrolled" : ""}`} data-bs-theme="dark">
            <div className="container">
                <Link className="navbar-brand fs-2 fw-bolder text-uppercase p-2" to="">Start Framework
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-uppercase fw-bolder text-white">
                    
                    <li className="nav-item p-1 p-lg-2"><NavLink className="nav-link text-decoration-none p-1 p-lg-2" to="about">About</NavLink></li>
                    <li className="nav-item p-1 p-lg-2"><NavLink className="nav-link text-decoration-none p-1 p-lg-2" to="portfolio">Portfolio</NavLink></li>
                    <li className="nav-item p-1 p-lg-2"><NavLink className="nav-link text-decoration-none p-1 p-lg-2" to="contact">Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}


