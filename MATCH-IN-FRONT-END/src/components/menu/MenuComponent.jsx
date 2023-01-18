import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import './MenuComponent.css'
import MenuButton from './menuComponents/MenuButton';


<link rel="stylesheet" href="MenuComponent.css" />;

const MenuComponent = () => {
    const navigate = useNavigate();
    const handleOnClickPerfil = useCallback(() => navigate("/user-profile", {}, [navigate]))
    const handleOnClickCrear = useCallback(() => navigate("/create-match", {}, [navigate]))
    const handleOnClickBuscar = useCallback(() => navigate("/partidos", {}, [navigate]))
    const handleOnClickEquipo = useCallback(() => navigate("/team-profile", {}, [navigate]))
   
    return (
        <div className="contenedor">
        <div className='perfil'>
        <MenuButton infoBoton={"Mi perfil"} handleOnClick={handleOnClickPerfil} />
        </div>
        <div className='buscarpartido'>
        <MenuButton infoBoton={"Buscar partido"} handleOnClick={handleOnClickBuscar} />
        </div>
        <div className='crearpartido'>
        <MenuButton infoBoton={"Crear partido"} handleOnClick={handleOnClickCrear} />
        </div>
        <div className='equipo'>
        <MenuButton infoBoton={"mi equipo"} handleOnClick={handleOnClickEquipo} />
        </div>

   </div>
    )
}

export default MenuComponent