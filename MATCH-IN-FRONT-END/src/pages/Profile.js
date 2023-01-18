import React, { useState, useEffect } from 'react'
import { FormularioPerfil,TablaPerfil } from '../components'
import { getMail,addProfile,getAllProfiles,getProfile,editProfile,deleteProfile}  from '../services/Profile';


const Perfil = () => {


    const [profile,setProfile] = useState([]);
    const [perfilEditado, setPerfilEditado] = useState(null);


    useEffect(() => {
        getProfiles();
    }, [])

    const getProfiles = async () => {
        const profilesDB = await getAllProfiles();
        setProfile(profilesDB);
    }

    const profileAdd = async (addedProfile) => {
        const profilesDB = await addProfile(addedProfile);
        getProfiles();
    }

    const profileEdit = async (editedProfile) => {
        const profilesDB = await editProfile(editedProfile);
        getProfiles();
    }

    const profileDelete = async (profileId) => {
        const profilesDB = await deleteProfile(profileId);
        getProfiles();
    }
    return(

        <div class="container">
            <div class="row">
                <FormularioPerfil
                perfileAdd={profileAdd} 
                perfilEditado= {perfilEditado}
                setPerfilEditado={setPerfilEditado}
                profileEdit={profileEdit}/>
            </div>

            <div class="row">
                <TablaPerfil
                profiles={profile}
                deleteProfile={profileDelete}
                setPerfilEditado={setPerfilEditado}/>

            </div>

        </div>
    )

}



export default Perfil;