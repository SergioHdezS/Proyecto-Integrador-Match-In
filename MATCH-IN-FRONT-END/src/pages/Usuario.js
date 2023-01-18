import React, { useCallback, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { FormularioUsuario, TablaUsuario, ProfileButton } from '../components';
import { getAllUsers, addUser, editUser, deleteUser } from '../services/User';

/* const usuario1 =[{
    id: '1',
    nombre: 'ivan',
    apellido: 'santibanez',
    correo: 'ivan@correo.cl',
    nombreDeUsuario: 'ivannnn',
    contrasena: '1234',
    fechaDeCreacion: '2022/12/15',
    fechaDeNacimiento: '2000/01/01'
    }] */

const Usuario = () => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate("/", {}, [navigate]))

    const [user, setUser] = useState([]);
    const [usuarioEditado, setUsuarioEditado] = useState(null);

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () => {
        const usersDB = await getAllUsers();
        setUser(usersDB);
    }

    const userAdd = async (addedUser) => {
        const usersDB = await addUser(addedUser);
        getUsers();
    }

    const userEdit = async (editedUser) => {
        const usersDB = await editUser(editedUser);
        getUsers();
    }

    const userDelete = async (userId) => {
        const usersDB = await deleteUser(userId);
        getUsers();
    }

    /* const userAdd = (usuario) => {
        const addUser = [
            ...user, usuario
        ]
        setUser(addUser);
    }

    const userDelete = (idUsuario) => {
        const changeUser = user.filter(usuario => usuario.id !== idUsuario)
        setUser(changeUser)
    }

    const userEdit = (usuarioEditado) => {
        const editUser = user.map(usuario => (usuario.id === usuarioEditado.id ? usuarioEditado : usuario))
        setUser(editUser);
    } */

    return (
        <div class="container">
            <div class="row">
                <FormularioUsuario userAdd={userAdd} usuarioEditado={usuarioEditado} setUsuarioEditado={setUsuarioEditado} userEdit={userEdit} />
            </div>
            <div class="row">
                <TablaUsuario usuarios={user} deleteUser={userDelete} setUsuarioEditado={setUsuarioEditado} />
            </div>
            <ProfileButton infoBoton={"Ir a Inicio"} handleOnClick={handleOnClick} />
        </div>
    )
}

export default Usuario;