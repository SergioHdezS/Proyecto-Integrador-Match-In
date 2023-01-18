import React from 'react';
import "./Buttons.css"

<link rel="stylesheet" href="Buttons.css"/>
const WhiteButton = ({infoBoton, handleOnClick}) => {
    return (
        <button class="boton-profile" type="button"
            onClick={() => {
                handleOnClick();
            }}>{infoBoton}
        </button>
    );
}

export default WhiteButton;