import { Grid } from "@mui/material"
import React from "react"
import { CustomTable, NavBarConLog } from "../components"
import Background from "../components/Background/Background"

const ListaPartidosPage = () => {
    return (
        <Background image="images/fondoTablas.png">
            <Grid container>
                <Grid item xs={12}>
                    <NavBarConLog></NavBarConLog>
                </Grid>
                <Grid item xs={12}>
                    <CustomTable users={users} />
                </Grid>
            </Grid>
        </Background>
    )
}

export default ListaPartidosPage

const users = [
    {
        usuario: "Chupete Suazo",
        fecha: "19-12-2022",
        lugar: "Hualpén",
        disciplina: "Fútbol 7",
        estado: "Activo"
    },
    {
        usuario: "Kalule",
        fecha: "12-12-2022",
        lugar: "Macul",
        disciplina: "Fútbol 11",
        estado: "Activo"
    },
    {
        usuario: "Rebe Fernandez",
        fecha: "07-12-2022",
        lugar: "La Pintana",
        disciplina: "Fútbol 7",
        estado: "En Curso"
    },
    {
        usuario: "Tiane",
        fecha: "12-11-2022",
        lugar: "La Cisterna",
        disciplina: "Fútbol 11",
        estado: "Terminado"
    },
    {
        usuario: "Ysaura",
        fecha: "11-10-2022",
        lugar: "La Granja",
        disciplina: "Fútbol 7",
        estado: "Terminado"
    }
]
