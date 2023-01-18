import React from 'react'
import VisionImg from '../../assets/img/vision.png'
import './CardVision.css'


<link rel="stylesheet" href="CardVision.css"/>

const CardVision = () => {
  return (
    <div className='col '>
    <div className='row contenedor-imagen-vision'>

    <img className='imagen-vision' src={VisionImg} alt=".imagenVision" />
    <div className='row contenedor-parrafo-v'>
    <p class="parrafo-vision"> Nuestra visión es lograr ser una comunidad<br/>
                               digital que acerque a los usuarios entre sí<br/>
                               para  realizar  actividades deportivas y <br/>
                               recreativas.</p>
                        </div>
  </div>
  </div>
  )
}

export default CardVision