import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton } from "@mui/material";
import React from "react";
import logonavbar from '../../assets/img/navbarlogo.png'
import usuarionavbarimg from '../../assets/img/navbarusuario.png'
import './NavBarSinLog.css'

<link rel="stylesheet" href="NavBarSinLog.css" />;
<script src="https://kit.fontawesome.com/06d7d33659.js" crossorigin="anonymous"></script>


function openNav() {
    document.getElementById("mobile-menu").style.width = "100%"

}

function closeNav() {
    document.getElementById("mobile-menu").style.width = "0%"

}


const NavBarSinLog = () => {
    return (

        <header className="header">
            <div className="logo">
                <a href="/"> <img src={logonavbar} alt="logonavbar" /></a>
            </div>
            <nav>
                <ul className="nav-links">
                    <li> <a href="/register">Regístrate</a></li>
                    <li> <a href="/login">Inicia sesión</a></li>
                    <li > <a href="/about-us">Quienes somos</a></li>
                </ul>
            </nav>
            <a className="usuarionavbarimg" href="/login"><img className="img-user" src={usuarionavbarimg} alt="usuarionavbar" /></a>
            <IconButton onClick={openNav}>
                <FontAwesomeIcon size="lg" icon={faBars} className="highlight" />
            </IconButton>
            <div className="overlay" id="mobile-menu">
                <a onClick={closeNav} href="#" className="close">&times;</a>
                <div className="overlay-content">
                    <a href="/register">Regístrate</a>
                    <a href="/login">Inicia sesión</a>
                    <a href="/about-us">Quienes somos</a>
                    <a href="/login"><img className="img-user" src={usuarionavbarimg} alt="usuarionavbar" /></a>

                </div>
            </div>

        </header>

    )


}
export default NavBarSinLog;