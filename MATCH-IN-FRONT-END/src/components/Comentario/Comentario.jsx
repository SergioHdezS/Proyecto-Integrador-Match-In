import { Avatar, Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Comentario = () => {
    return (
        <Grid container column spacing={1} >
            <Grid item xs={2}
                margin={2}
                align="center"
            >
                <Card sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor: 'rgba(0, 0, 0, .5)',
                    color: 'white',
                    p: 0.5,
                    border: 2,
                    borderRadius: 2,
                    borderColor: 'black',
                    width: 189
                }}>
                    <>
                        <Box>
                            <Avatar
                                alt="Chupete Suazo"
                                src="../assets/img/chupeteSuazo.png"
                                sx={{ width: 56, height: 56 }} />
                        </Box>
                        <CardContent>
                            <h5>nickname</h5>
                        </CardContent>
                    </>
                </Card>
            </Grid>
            <Grid item xs={8}
                margin={2}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    /* bgcolor: 'white',
                    color: 'black', */

                }}>
                <Box justifyItems={'center'}>
                    <TextField
                        fullWidth
                        id="fullWidth"
                        label="Añade un comentario..."
                        sx={{ bgcolor: 'white', bordercolor: 'black', borderRadius: 2 }}

                    />
                </Box>
                {/* <input type="text" id="comentario" name="comentario" placeholder='Ingrese su comentario aqui'></input> */}
            </Grid>
            <Grid item xs={1}
                margin={2}>
                <Grid item sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor: 'rgba(217, 217, 217, .9)',
                    color: 'black',
                    p: 0.5,
                    mb: 2,
                    border: 2,
                    borderRadius: 2,
                    borderColor: 'black',
                    width: 120
                }}>
                    <Button size='small' sx={{ color: 'black' }}>Comentar</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Comentario