import { Button, Grid } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { addPost } from '../../services/Partido';

const initialPost = [{
    titulo: '',
    fecha: '',
    hora: '',
    lugar: '',
    disciplina: '',
    jugadoresTotales: '',
    jugadoresDisponibles: '',
    infoPartido: ''
}]

const FormularioCrearPartido = ({ postAdd }) => {
    const [post, setPost] = useState(initialPost);
    const { titulo, fecha, hora, lugar, disciplina, jugadoresTotales, jugadoresDisponibles, infoPartido } = post;

    const handleInputChange = (e) => {
        const changedFormValue = {
            ...post,
            [e.target.name]: e.target.value
        }
        setPost(changedFormValue);
    }

    useEffect(() => {
        setPost({
            titulo: '',
            fecha: '',
            hora: '',
            lugar: '',
            disciplina: '',
            jugadoresTotales: '',
            jugadoresDisponibles: '',
            infoPartido: ''
        }
        )
    }
        , []);

    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate("/partidos", {}, [navigate]))
    function funcionDoble() {
        handleOnClick();
        postAdd(post);
    }

    return (
        <>
            <h5 style={{ color: 'white', textAlign: 'center', }}>Crea tu Partido</h5>
            <form>
                <Grid
                    container
                    spacing={1}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item xs={12}>
                        <label for="titulo" style={{ color: 'white' }}>Titulo </label>
                        <input type="text" class="form-control" id="titulo" name="titulo" value={titulo} onChange={handleInputChange} required />
                    </Grid>
                    <Grid item xs={12}>
                        <label for="fecha" style={{ color: 'white' }}>Fecha </label>
                        <input type="date" class="form-control" id="fecha" name="fecha" value={fecha} onChange={handleInputChange} required />
                    </Grid>
                    <Grid item xs={12}>
                        <label for="hora" style={{ color: 'white' }}>Hora </label>
                        <input type="time" class="form-control" id="hora" name="hora" value={hora} onChange={handleInputChange} required />
                    </Grid>
                    <Grid item xs={12}>
                        <label for="lugar" style={{ color: 'white' }}>Lugar</label>
                        <input type="text" class="form-control" id="lugar" name="lugar" value={lugar} onChange={handleInputChange} required />
                    </Grid>
                    <Grid item xs={12}>
                        <label for="disciplina" style={{ color: 'white' }}>Disciplina</label>
                        <input type="text" class="form-control" id="disciplina" name="disciplina" value={disciplina} onChange={handleInputChange} required />
                    </Grid>
                    <Grid item xs={6}>
                        <label for="numero de jugadores totales" style={{ color: 'white' }}>Número de Jugadores Totales</label>
                        <input type="number" class="form-control" id="numero de jugadores totales" name="jugadoresTotales" value={jugadoresTotales} onChange={handleInputChange} required />
                    </Grid>
                    <Grid item xs={6}>
                        <label for="numero de jugadores disponibles" style={{ color: 'white' }}>Número de Jugadores Disponibles</label>
                        <input type="number" class="form-control" id="numero de jugadores disponibles" name="jugadoresDisponibles" value={jugadoresDisponibles} onChange={handleInputChange} required />
                    </Grid>
                    <Grid item xs={12}>
                        <label for="info" style={{ color: 'white' }}>Informacion Adicional</label>
                        <input type="text" class="form-control" id="info" name="infoPartido" value={infoPartido} onChange={handleInputChange} />
                    </Grid>

                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button style={{
                            color: 'black',
                            background: 'white',
                            textAlign: 'center'
                        }}
                            variant="contained"
                            onClick={() => postAdd(funcionDoble())}
                        >
                            Publicar</Button>
                    </Grid>
                </Grid>
            </form>
        </>
    )
}

export default FormularioCrearPartido