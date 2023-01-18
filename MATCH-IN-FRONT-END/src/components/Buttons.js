import React from "react";
import "./Buttons.css"


const ProfileButton = ({infoBoton, handleOnClick}) => {
    <link rel="stylesheet" href="Buttons.css"/>
    return (    
        
        <button class="boton-menu"type="button" 
        onClick={()=>{
            handleOnClick();
            }}>{infoBoton}
        </button>
    );
}

export default ProfileButton;