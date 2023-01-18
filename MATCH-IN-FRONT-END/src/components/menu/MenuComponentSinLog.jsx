import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import MenuButton from './menuComponents/MenuButton'

const MenuComponentSinLog = () => {
    const navigate = useNavigate();
    const handleOnClickIniciarSesion = useCallback(() => navigate("/login", {}, [navigate]))
  return (
    <div className="contenedor">
    <div className='perfil'>
    <MenuButton infoBoton={"Mi perfil"} handleOnClick={handleOnClickIniciarSesion} />
    </div>
    <div className='buscarpartido'>
    <MenuButton infoBoton={"Buscar partido"} handleOnClick={handleOnClickIniciarSesion} />
    </div>
    <div className='crearpartido'>
    <MenuButton infoBoton={"Crear partido"} handleOnClick={handleOnClickIniciarSesion} />
    </div>
    <div className='equipo'>
    <MenuButton infoBoton={"mi equipo"} handleOnClick={handleOnClickIniciarSesion} />
    </div>

</div>
  )
}

export default MenuComponentSinLog