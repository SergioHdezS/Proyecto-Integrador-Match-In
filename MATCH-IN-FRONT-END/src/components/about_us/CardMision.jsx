import React from 'react'
import './CardMision.css'
import MisionImg from '../../assets/img/mision.png'

<link rel="stylesheet" href="CardMision.css"/>


const CardMision = () => {
  return (

    <div className='col '>
    <div className='row '>

    <img className='imagen-mision' src={MisionImg} alt=".imagenMision" />
    <div className='row contenedor-parrafo-m'>
    <p class="parrafo-mision"> Nuestra misión es crear comunidad a <br/>
                        través de una plataforma, que permita <br/>
                        desarrollar y fomentar la organización <br/>
                        de actividades deportivas y recreativas.</p>
                        </div>
  </div>
  </div>
  )
}

export default CardMision