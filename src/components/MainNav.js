import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNav.module.css";
import { useState} from 'react';


const MainNav = () => {
 
const [color, setNavbar] = useState(false);

const changeBackground = () => {
  if(window.scrollY >= 100){
    setNavbar(true)
  }else{
    setNavbar(false)
  }
}

window.addEventListener("scroll", changeBackground);

  return (
    <div id="top">
      <nav  className={ color ? "navbar navbar-expand-lg fix navBg" : "navbar navbar-expand-lg fix transparent"}>
        <div class="container-fluid">
          
          <img
            src="https://nunsaunical.com.ng/static/media/NunsalogoBg.1cc5a13a00b38d885974.png"
            alt="nunsalogo"
            className={classes.navLogo}
          />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className={`navbar-nav ${classes.navList}`}
            >
              <li class="nav-item">
              <div class={classes.navDropList}>
                <NavLink
                  to="/"
                  className={`nav-link ${classes.link}`}
                  aria-current="page"
                >
                  Home
                </NavLink>
                </div>
              </li>
              <li class="nav-item">
              <div class={classes.navDropList}>
                <NavLink
                  to="/About"
                  className={`nav-link ${classes.link}`}
                  aria-current="page"
                >
                  About
                </NavLink>
                </div>
              </li>
              <li class="nav-item">
              <div class={classes.navDropList}>
                <NavLink
                  to="/Excecutives"
                  className={`nav-link ${classes.link}`}
                  aria-current="page"
                >
                  Excecutives
                </NavLink>
                </div>
              </li>
              <li class="nav-item">
              <div class={classes.navDropList}>
                <NavLink
                  to="/Blog"
                  className={`nav-link ${classes.link}`}
                  aria-current="page"
                >
                  Blog
                </NavLink>
                </div>
              </li>
              <li class="nav-item">
              <div class={classes.navDropList}>
                <NavLink
                  to="/Login"
                  className={`nav-link ${classes.link}`}
                  aria-current="page"
                >
                  Login
                </NavLink>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className={color ? "fix-bottom " : "fix-bottom fix-display"}>
        <a href="#top"className={classes.fixlink}><i class="fa-solid fa-angle-up"></i></a>
      
      </div>
    </div>
  );
};

export default MainNav;
