import React from "react";

const TablaUsuario = ({ usuarios, deleteUser, setUsuarioEditado }) => {

    return (
        <table class="table table-bordered table-striped">
            <thead>
                <tr>
                    <th scope="col">#ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Fecha de creacion</th>
                    <th scope="col">Fecha de nacimiento</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {usuarios.map((usuario) => (
                    <tr>
                        <th scope="row">{usuario.id}</th>
                        <td>{usuario.name}</td>
                        <td>{usuario.lastName}</td>
                        <td>{usuario.mail}</td>
                        <td>{usuario.createdAt}</td>
                        <td>{usuario.birthDate}</td>
                        <td class="d-flex justify-content-center"><button type="button" class="btn btn-danger" onClick={() => { deleteUser(usuario.id) }}>Eliminar</button></td>
                        <td class="d-flex justify-content-center"><button type="button" class="btn btn-warning" onClick={() => { setUsuarioEditado(usuario) }}>Editar</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TablaUsuario;