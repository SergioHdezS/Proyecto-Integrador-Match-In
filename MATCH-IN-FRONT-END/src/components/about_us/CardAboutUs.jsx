import React from 'react'
import fran from '../../assets/img/fran.png'
import ivan from '../../assets/img/ivan.png'
import benja from '../../assets/img/benja.png'
import paula from '../../assets/img/paula.png'
import checho from '../../assets/img/checho.png'
import './CardAboutUs.css'

<link rel="stylesheet" href="CardAboutUs.css" />


const CardAboutUs = () => {
  return (
    <div className='row contenedor-tarjetas'>
      <div className='col fran'>

        <img className='fran' src={fran} class="card-img-top" alt="..." />
        <h5 class="card-title">Francisca <br />González</h5>
      </div>
      <div className='col ivan'>

        <img className='ivan' src={ivan} class="card-img-top" alt="..." />
        <h5 class="card-title">Iván <br />Santibáñez</h5>


      </div>
      <div className='col '>
        <img className='paula' src={paula} class="card-img-top" alt="..." />
        <h5 class="card-title">Paula <br /> Galaz</h5>

      </div>
      <div className='col '>
        <img className='benja' src={benja} class="card-img-top" alt="..." />
        <h5 class="card-title">Benjamín <br /> Bustos</h5>

      </div>
      <div className='col '>
        <img className='checho' src={checho} class="card-img-top" alt="..." />
        <h5 class="card-title">Sergio <br /> Hernandez</h5>


      </div>



    </div>
  )
}

export default CardAboutUs