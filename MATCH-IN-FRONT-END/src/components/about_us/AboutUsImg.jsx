import React from 'react'
import QuienesSomosImg from '../../assets/img/QuieneSomosImg.png'
import './AboutUsImg.css'

<link rel="stylesheet" href="AboutUsImg.css"/>

const AboutUsImg = () => {
  return (
    <div className='contenedor-imagenQS'>
       <img className='imagenQS' src={QuienesSomosImg} alt="imagenQS"/>
    </div>
  )
}

export default AboutUsImg;