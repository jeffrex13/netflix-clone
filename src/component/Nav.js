import React, { useEffect, useState } from "react";
import NetflixLogo from "../assets/images/Logonetflix.png";
import NetflixAvatar from "../assets/images/netflix-profile.png";
import "./Nav.css";

const Nav = () => {
    const[show, handleShow] = useState(false); 

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, [])

  return (
    <div className={`nav ${show && "nav-black"}`}>
      <img className="nav-logo" src={NetflixLogo} alt="Netflix Logo" />
      <img className="nav-avatar" src={NetflixAvatar} alt="Netflix Avatar" />
    </div>
  );
};

export default Nav;
