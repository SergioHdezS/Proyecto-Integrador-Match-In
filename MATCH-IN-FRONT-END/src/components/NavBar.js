import React from "react";




const NavBarSinLog = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-md navbar-dark bg-black">
                <div class="container-fluid ">
                    <a href="/" class="navbar-brand ms-5"><img src="/navbarlogo.png" alt="logo"></img></a>
                    <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#MenuNavegacion">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div id="MenuNavegacion" class="collapse navbar-collapse ">
                        <ul class="navbar-nav  mx-auto ">
                            <li class="nav-item" > <a class="nav-link text-light m-2 fs-3" href="/register">Regístrate</a></li>
                            <li class="nav-item" > <a class="nav-link text-light m-2 fs-3" href="/login">Inicia sesión</a></li>
                            <li class="nav-item" > <a class="nav-link text-light m-2 fs-3" href="/about-us">Quienes somos</a></li>
                        </ul>
                        <ul class="navbar-nav me-4">
                            <a href="/login" class="navbar-im"><img src="navbarusuario.png" alt="navbarlogo"></img></a>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}

const NavBarConLog = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-md navbar-dark bg-black">
                <div class="container-fluid">
                    <a href="/" class="navbar-brand ms-5"><img src="/navbarlogo.png" alt="logo"></img></a>
                    <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#MenuNavegacion">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div id="MenuNavegacion" class="collapse navbar-collapse ">
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Búsqueda" aria-label="Search"/>
                                <button class="btn btn-outline-success" type="submit">Ir</button>
                        </form>
                        <ul class="navbar-nav  mx-auto">
                            <li class="nav-item" > <a class="nav-link text-light m-2 fs-3" href="/about-us">Quienes somos</a></li>
                        </ul>
                        <ul class="navbar-nav me-4">
                            <li class="nav-item" > <a class="nav-link text-light m-2 fs-4" href="/">Cerrar sesión</a></li>
                            <li class="nav-item" > <a class="nav-link text-light m-2 fs-4" href="/user-profile">Nombre</a></li>
                            <li class="nav-item" ><a href="/user-profile" class="navbar-im"><img src="navbarusuario.png" alt="navbarlogo"></img></a></li>

                        </ul>


                    </div>
                </div>
            </nav>
        </div>
    )

}

export { NavBarConLog, NavBarSinLog };