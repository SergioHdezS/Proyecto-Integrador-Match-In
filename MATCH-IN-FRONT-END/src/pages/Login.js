import { Card, Grid } from "@mui/material"
import React from "react"
import { FondoLoginComponent, Forms, NavBarSinLog } from "../components"

const Login = () => {
    return (
        <FondoLoginComponent>
            <NavBarSinLog></NavBarSinLog>
            <Grid container>
                <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '85vh' }}>
                    <img src="/logogrande.png" />
                </Grid>
                <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Card elevation={0}
                        sx={{
                            padding: 2,
                            backgroundColor: "rgba(0,0,0,0)",
                            width: "60%",
                        }}>
                        <Forms></Forms>
                    </Card>
                </Grid>
            </Grid>
        </FondoLoginComponent>
    )
}

export default Login