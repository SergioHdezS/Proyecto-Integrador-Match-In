import { Card, Grid } from "@mui/material"
import React, { useState, useEffect } from 'react'
import { FondoLoginComponent, NavBarSinLog } from "../components"
import FormularioRegistro from "../components/FormularioRegistro/FormularioRegistro"
import { addUser, getAllUsers } from "../services/User"

const Registro = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () => {
        const usersDB = await getAllUsers();
        setUser(usersDB);
    }

    const userAdd = async (addedUser) => {
        const usersDB = await addUser(addedUser);
    }

    return (
        <FondoLoginComponent>
            <NavBarSinLog></NavBarSinLog>
            <Grid container>
                <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '85vh' }}>
                    <img src="/logogrande.png" />
                </Grid>
                <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Card sx={{
                        padding: 2,
                        backgroundColor: "rgba(0,0,0,0.8)",
                        width: "60%",
                    }}>
                        <FormularioRegistro userAdd={userAdd} />
                    </Card>
                </Grid>
            </Grid>
        </FondoLoginComponent>
    )
}

export default Registro
