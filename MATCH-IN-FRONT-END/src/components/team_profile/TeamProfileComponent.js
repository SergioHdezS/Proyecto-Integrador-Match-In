import React from 'react';
import './TeamProfile.css';
import InsigniaEquipo from '../../assets/img/insigniaEquipo.png';
import FotoPerfil from '../../assets/img/fotoPerfil.png'

<link rel="stylesheet" href="TeamProfile.css" />
const TeamProfileComponent = () => {
    return (
        <div className="container-team-profile-page">
                <div className='container-team-profile'>
                    <div className='gallery_item'>
                        <img className='gallery_img insignia' src={InsigniaEquipo} alt="" />
                    </div>
                    <div className='gallery_item team-name-box'>
                        <div className='team-name'>nombre del equipo</div>
                    </div>
                    <div className='gallery_item'>
                        <a href='/user-profile'><img className='gallery_img' src={FotoPerfil} alt="" /></a>
                        <div className='gallery_name'>nombre jugador</div>
                    </div>
                    <div className='gallery_item'>
                        <a href='/user-profile'><img className='gallery_img' src={FotoPerfil} alt="" /></a>
                        <div className='gallery_name'>nombre jugador</div>
                    </div>
                    <div className='gallery_item'>
                        <a href='/user-profile'><img className='gallery_img' src={FotoPerfil} alt="" /></a>
                        <div className='gallery_name'>nombre jugador</div>
                    </div>
                    <div className='gallery_item'>
                        <a href='/user-profile'><img className='gallery_img' src={FotoPerfil} alt="" /></a>
                        <div className='gallery_name'>nombre jugador</div>
                    </div>
                    <div className='gallery_item'>
                        <a href='/user-profile'><img className='gallery_img' src={FotoPerfil} alt="" /></a>
                        <div className='gallery_name'>nombre jugador</div>
                    </div>
                    <div className='gallery_item'>
                        <a href='/user-profile'><img className='gallery_img' src={FotoPerfil} alt="" /></a>
                        <div className='gallery_name'>nombre jugador</div>
                    </div>
                    <div className='gallery_item'>
                        <a href='/user-profile'><img className='gallery_img' src={FotoPerfil} alt="" /></a>
                        <div className='gallery_name'>nombre jugador</div>
                    </div>
                </div>
        </div>
    );
}

export default TeamProfileComponent;