import React from 'react'
import './AboutUsComponent.css'
import AboutUsImg from './about_us/AboutUsImg'
import CardAboutUs from './about_us/CardAboutUs'
import CardMision from './about_us/CardMision'
import CardVision from './about_us/CardVision'

<link rel="stylesheet" href="AboutUsComponent.css"/>

const AboutUsComponent = ({children}) => {
  return (
    <div className='contenedor-general-AU'>
        {children}
    <div className='row backg-uno'>
        <div className='row compAS'>

        <div className='row'>
        <AboutUsImg/>
        </div>
        <div className='row'>
        <CardAboutUs/>
        </div>
       
        </div>
    </div>
    <div className='row backg-dos'>
      
      <div className='row mision'>
      <CardMision/>
      </div>
      <div className='row vision'>
      <CardVision/>
      </div>


       
    </div>
</div>
  )
}

export default AboutUsComponent