import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton } from "@mui/material";
import React from "react";
import logonavbar from '../../assets/img/navbarlogo.png'
import usuarionavbarimg from '../../assets/img/navbarusuario.png'
import './NavBarConLog.css'
import { faBars } from "@fortawesome/free-solid-svg-icons";


<link rel="stylesheet" href="NavBarConLog.css" />;
<script src="https://kit.fontawesome.com/06d7d33659.js" crossorigin="anonymous"></script>


function openNav() {
    document.getElementById("mobile-menu").style.width = "100%"

}

function closeNav() {
    document.getElementById("mobile-menu").style.width = "0%"

}



const NavBarConLog = () => {
    return (
        <header className="header-dos">
            <div className="logo">
                <a href="/home"> <img src={logonavbar} alt="logonavbar" /></a>


            </div>
            <div>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Búsqueda" aria-label="Search" />
                    <button class="btn " type="submit">Ir</button>
                </form>
            </div>
            <nav>
                <ul className="nav-links-dos">
                    <li> <a href="/about-us">Quienes somos</a></li>
                    <li> <a href="/login">Cerrar sesión</a></li>
                    <li > <a href="/user-profile">Usuario</a></li>
                </ul>
            </nav>
            <a className="usuarionavbarimg" href="/user-profile"><img className="img-user" src={usuarionavbarimg} alt="usuarionavbar" /></a>
            <IconButton onClick={openNav}>
                <FontAwesomeIcon size="lg" icon={faBars}  className="highlight"/>
            </IconButton>
           

            <div className="overlay" id="mobile-menu">
                <a onClick={closeNav} href="#" className="close">&times;</a>
                <div className="overlay-content">
                    <a href="/about-us">Quienes somos</a>
                    <a href="/login">Cerrar sesión</a>
                    <a href="/user-profile">Usuario</a>
                    <a href="/user-profile"><img className="img-user" src={usuarionavbarimg} alt="usuarionavbar" /></a>

                </div>
            </div>

        </header>

    )

}

export default NavBarConLog