import React, { useState, useEffect } from "react";

const initialUsuario = [{
    name: '',
    lastName: '',
    mail: '',
    password: '',
    createdAt: '',
    birthDate: ''
}]

const FormularioUsuario = ({ userAdd, usuarioEditado, setUsuarioEditado, userEdit }) => {
    const [usuario, setUsuario] = useState(initialUsuario);
    const { name, lastName, mail, password, createdAt, birthDate } = usuario;

    const handleInputChange = (e) => {
        //esta funcion se llama cada vez que nostros escribirmos algo en algun input de
        //nuestra página
        const changedFormValue = {
            //va a antaner los datos que tiene usuario de los input que no he tocado
            //pero va a aactualizar el atributo que cambié por su nuevo valor
            ...usuario,
            [e.target.name]: e.target.value
        }
        //finalmente los cambios deberán verse reflejados en neustro hook
        setUsuario(changedFormValue);
    }

    useEffect(() => {
        if (usuarioEditado !== null) {
            setUsuario(usuarioEditado)
        } else {
            setUsuario({
                name: '',
                lastName: '',
                mail: '',
                password: '',
                createdAt: '',
                birthDate: ''
            }
            )
        }
    }, [usuarioEditado]);

    return (
        <div>
            <h3>Formulario Usuario</h3>
            <form>
                {usuarioEditado !== null ? <h1>Editar Usuario</h1> : <h1>Ingrese Usuario</h1>}
                
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="" name="name" value={name} onChange={handleInputChange} />
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">Apellido</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="" name="lastName" value={lastName} onChange={handleInputChange} />
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Correo</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="" name="mail" value={mail} onChange={handleInputChange} />
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Contrasena</label>
                    <input type="password" class="form-control" id="formGroupExampleInput2" placeholder="" name="password" value={password} onChange={handleInputChange} />
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Fecha de creacion</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="" name="createdAt" value={createdAt} onChange={handleInputChange} />
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Fecha de nacimiento</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="" name="birthDate" value={birthDate} onChange={handleInputChange} />
                </div>
                {usuarioEditado !== null ? (
                    <button
                        type="button"
                        class="btn btn-success"
                        onClick={() => userEdit(usuario)}
                    >
                        Editar usuario
                    </button>
                ) : (
                    <button
                        type="button"
                        class="btn btn-success"
                        onClick={() => userAdd(usuario)}
                    >
                        Ingresar usuario
                    </button>
                )}
                {usuarioEditado !== null ? <button
                    type="button"
                    class="btn btn-warning"
                    onClick={() => setUsuarioEditado(null)}
                >
                    Cancelar
                </button> : <></>}
            </form>
        </div>
    );
}

export default FormularioUsuario;