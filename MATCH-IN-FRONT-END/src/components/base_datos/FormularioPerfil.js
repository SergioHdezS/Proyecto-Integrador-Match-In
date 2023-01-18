import React, { useState, useEffect } from "react";
import { Form } from "react-router-dom";
import ProfileButton from "../Buttons";

const initialProfile = [
    {
        id: '',
        city: '',
        image: '',
        rating: '',
        nickname: '',
        prefPosition: '',
        user_id: ''
    }
]

const FormularioPerfil = (perfilEditado,profileAdd,setPerfilEditado,profileEdit) => {
    const [profile, setProfile] = useState(initialProfile);
    const { id, city, image, rating, nickname, prefPosition, user_id } = profile;


    const handleInputChange = (e) => {

        const changedFormValue = {
            ...profile,
            [e.target.name]: e.target.value
        }
        setProfile(changedFormValue);
    }


    useEffect(() => {
        if (perfilEditado !== null) {
            setProfile(perfilEditado)
        } else {
            setProfile({
                id: '',
                city: '',
                image: '',
                rating: '',
                nickname: '',
                prefPosition: '',
                user_id: ''
            }
            )
        }
    }, [perfilEditado]);

    return (

        <div>
            <h3>Formulario Usuario</h3>
            <form>
                {perfilEditado !== null ? <h1>Editar Perfil</h1> : <h1>Ingrese Perfil</h1>}
                <div class="mb-3">
                    <label 
                    for="formGroupExampleInput" 
                    class="form-label"
                    >ID</label>
                    <input 
                    type="text" 
                    class="form-control" 
                    id="formGroupExampleInput" 
                    name="id" 
                    value={id} 
                    onChange={handleInputChange} 
                    disabled />
                </div>
                <div class="mb-3">
                    <label 
                    for="formGroupExampleInput2" 
                    class="form-label"
                    >Nombre</label>
                    <input
                     type="text" 
                     class="form-control" 
                     id="formGroupExampleInput2" 
                     placeholder="" 
                     name="city" 
                     value={city} 
                     onChange={handleInputChange} />
                </div>
                <div class="mb-3">
                    <label 
                    for="formGroupExampleInput" 
                    class="form-label"
                    >Apellido</label>
                    <input 
                    type="text" 
                    class="form-control" 
                    id="formGroupExampleInput" 
                    placeholder="" name="image" 
                    value={image} 
                    onChange={handleInputChange} />
                </div>
                <div class="mb-3">
                    <label 
                    for="formGroupExampleInput" 
                    class="form-label"
                    >Apellido</label>
                    <input 
                    type="text" 
                    class="form-control" 
                    id="formGroupExampleInput" 
                    placeholder="" name="rating" 
                    value={rating} 
                    onChange={handleInputChange} />
                </div>
                <div class="mb-3">
                    <label 
                    for="formGroupExampleInput" 
                    class="form-label"
                    >Apellido</label>
                    <input 
                    type="text" 
                    class="form-control" 
                    id="formGroupExampleInput" 
                    placeholder="" name="nickname" 
                    value={nickname} 
                    onChange={handleInputChange} />
                </div>
                <div class="mb-3">
                    <label 
                    for="formGroupExampleInput" 
                    class="form-label"
                    >Apellido</label>
                    <input 
                    type="text" 
                    class="form-control" 
                    id="formGroupExampleInput" 
                    placeholder="" name="prefPosition" 
                    value={prefPosition} 
                    onChange={handleInputChange} />
                </div>
                <div class="mb-3">
                    <label 
                    for="formGroupExampleInput" 
                    class="form-label"
                    >Apellido</label>
                    <input 
                    type="text" 
                    class="form-control" 
                    id="formGroupExampleInput" 
                    placeholder="" name="user_id" 
                    value={user_id} 
                    onChange={handleInputChange} />
                </div>
              

                {perfilEditado !== null ? (
                    <button
                        type="button"
                        class="btn btn-success"
                        onClick={() => profileEdit(profile)}
                    >
                        Editar perfil
                    </button>
                ) : (
                    <button
                        type="button"
                        class="btn btn-success"
                        onClick={() => profileAdd(profile)}
                    >
                        Ingresar Perfil
                    </button>
                )}
                {perfilEditado !== null ? <button
                    type="button"
                    class="btn btn-warning"
                    onClick={() => setPerfilEditado(null)}
                >
                    Cancelar
                </button> : <></>}
            </form>
        </div>

    )

}

export default FormularioPerfil;





