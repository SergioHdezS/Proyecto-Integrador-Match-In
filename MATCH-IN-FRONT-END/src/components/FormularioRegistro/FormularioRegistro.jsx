import { Button, Grid } from '@mui/material'
import React, { useCallback, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const initialUsuario = [{
    name: '',
    lastName: '',
    mail: '',
    password: '',
    birthDate: ''
}]

const FormularioRegistro = ({ userAdd, usuarioEditado }) => {
    const [usuario, setUsuario] = useState(initialUsuario);
    const { name, lastName, mail, password, birthDate } = usuario;

    const handleInputChange = (e) => {
        const changedFormValue = {
            ...usuario,
            [e.target.name]: e.target.value
        }
        setUsuario(changedFormValue);
    }

    useEffect(() => {
        setUsuario({
            name: '',
            lastName: '',
            mail: '',
            password: '',
            birthDate: ''
        }
        )
    }
        , []);

    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate("/login", {}, [navigate]))

    function funcionDoble() {
        handleOnClick();
        userAdd(usuario);
    }

    return (
        <>
            <h5 style={{ color: 'white', textAlign: 'center', }}>Registro</h5>
            <form>
                <Grid
                    container
                    spacing={1}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item xs={12}>
                        <label for="nombre" style={{ color: 'white' }}>Nombre</label>
                        <input type="text" class="form-control" id="nombre" name="name" value={name} onChange={handleInputChange} required />
                    </Grid>
                    <Grid item xs={12}>
                        <label for="apellido" style={{ color: 'white' }}>Apellido</label>
                        <input type="text" class="form-control" id="apellido" name="lastName" value={lastName} onChange={handleInputChange} required />
                    </Grid>
                    <Grid item xs={12}>
                        <label for="fecha de nacimiento" style={{ color: 'white' }}>Fecha de Nacimiento</label>
                        <input type="date" class="form-control" id="fecha de nacimiento" name="birthDate" value={birthDate} onChange={handleInputChange} required />
                    </Grid>
                    <Grid item xs={12}>
                        <label for="Correo" style={{ color: 'white' }}>Correo</label>
                        <input type="email" class="form-control" id="Correo" name="mail" value={mail} onChange={handleInputChange} required />
                    </Grid>
                    <Grid item xs={12}>
                        <label for="contraseña" style={{ color: 'white' }}>Contraseña</label>
                        <input type="password" class="form-control" id="contraseña" name="password" value={password} onChange={handleInputChange} required />
                    </Grid>
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button style={{
                            color: 'black',
                            background: 'white',
                            textAlign: 'center'
                        }}
                            variant="contained"
                            onClick={() => userAdd(funcionDoble())}
                        >
                            Registrate</Button>
                    </Grid>
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <p style={{ color: 'white' }}>¿Ya tienes una cuenta? <a href='/login'>Inicia Sesión</a></p>
                    </Grid>
                </Grid>
            </form>
        </>
    )
}

export default FormularioRegistro