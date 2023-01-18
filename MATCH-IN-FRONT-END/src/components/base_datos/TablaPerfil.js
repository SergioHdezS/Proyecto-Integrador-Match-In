import React from "react";
import { deleteProfile } from "../../services/Profile";


const TablaPerfil = ({ profiles, deleteProfile, setPerfilEditado }) => {

    return (
        <table class="table table-bordered table-striped">
            <thead>
                <tr>
                    <th scope="col">#ID</th>
                    <th scope="col">Ciudad</th>
                    <th scope="col">Imagen</th>
                    <th scope="col">Calificación</th>
                    <th scope="col">Apodo</th>
                    <th scope="col">Posición preferida</th>
                    <th scope="col">id de usuario</th>
                </tr>
            </thead>
            <tbody>
                {profiles.map((profile) => (
                    <tr>
                        <th scope="row">{profile.id}</th>
                        <td>{profile.city}</td>
                        <td>{profile.image}</td>
                        <td>{profile.rating}</td>
                        <td>{profile.nickname}</td>
                        <td>{profile.prefPosition}</td>
                        <td>{profile.user_id}</td>
                        <td class="d-flex justify-content-center"><button type="button" class="btn btn-danger" onClick={() => { deleteProfile(profile.id) }}>Eliminar</button></td>
                        <td class="d-flex justify-content-center"><button type="button" class="btn btn-warning" onClick={() => { setPerfilEditado(profile) }}>Editar</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TablaPerfil;