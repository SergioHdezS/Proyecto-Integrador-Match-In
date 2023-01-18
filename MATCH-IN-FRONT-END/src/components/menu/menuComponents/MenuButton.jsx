import React from 'react'
import './MenuButton.css'

<link rel="stylesheet" href="MenuButton.css" />;

const MenuButton = ({infoBoton,handleOnClick}) => {
  return (
    <button class="boton-menu"type="button"
    onClick={()=>{
      handleOnClick();
      }}
      >
        {infoBoton}
    </button>
  )
}

export default MenuButton