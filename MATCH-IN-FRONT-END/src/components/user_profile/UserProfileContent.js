import React, { useCallback, useState } from "react";
import './UserProfile.css';
import FotoPerfil from '../../assets/img/fotoPerfil.png'
import InsigniaEquipo from '../../assets/img/insigniaEquipo.png'
import WhiteButton from '../WhiteButton';
import { useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';


<link rel="stylesheet" href="UserProfile.css" />
const UserProfileContent = () => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate("/historial", {}, [navigate]));
    const [value, setValue] = React.useState(1);
    return (
        <div className="container-user-profile-page">
            <div className='container-profile'>
                <div className='row'>
                    <div className='col col-imagenes'>
                        <img className='foto-perfil' src={FotoPerfil} alt="imagenQS" />
                        <a href="/team-profile"><img className='insignia-equipo' src={InsigniaEquipo} alt="imagenQS" /></a>
                    </div>
                    <div className='col col-tabla'>
                        <table>
                            <h2>perfil de usuario</h2>
                            <h3>nombre</h3>
                            <tr>
                                <td className='box'>nombre</td>
                            </tr>
                            <h3>posicion</h3>
                            <tr>
                                <td className='box'>posicion</td>
                            </tr>
                            <h3>equipo</h3>
                            <tr>
                                <td className='box'>equipo</td>
                            </tr>
                            <div className="rate-title">calificaciones</div>
                            <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                                precision={0.5}
                                size="large"
                            />
                        </table>
                        <div className="record-button"><WhiteButton infoBoton={"mi historial"} handleOnClick={handleOnClick} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfileContent;