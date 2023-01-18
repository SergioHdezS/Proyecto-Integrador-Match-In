import { Card, Grid, Typography } from '@mui/material'
import React, { Fragment } from 'react'

const InfoPartido = () => {
    const informacion = {
        comuna: 'Hualpén',
        fecha: '19-12-2022',
        hora: '17:00',
        disciplina: 'Fútbol 7',
        jugadores_actuales: [7, 14],
        informacion_adicional: 'aaaaaaaaaaaaaaaaaaaaaaaaa'
    }
    return (
        <Grid container spacing={2}>
            {Object.keys(informacion).map((item, key) => (
                <Fragment key={key}>
                    {item === "informacion_adicional" ? (
                        <>
                            <Grid item xs={12}>
                                <Typography sx={{ textAlign: 'start', fontWeight: 'bold', }}>{(item.replace("_", " ") + ":").toUpperCase()}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Card sx={{ bgcolor: 'rgba(0, 0, 0, .5)', border: 2, borderRadius: 2, p: 1 }}>
                                    <Typography color={'white'} sx={{ textAlign: 'start' }}>{(informacion[item]).toUpperCase()}</Typography>
                                </Card>
                            </Grid>
                        </>
                    ) : item === "jugadores_actuales" ? (
                        <>
                            <Grid item xs={4}>
                                <Typography sx={{ textAlign: 'start', fontWeight: 'bold', }}>{(item.replace("_", " ") + ":").toUpperCase()}</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Card sx={{ bgcolor: 'rgba(0, 0, 0, .5)', border: 2, borderRadius: 2, }}>
                                    <Typography color={'white'} sx={{ textAlign: 'center' }}>{informacion[item][0] + "/" + informacion[item][1]}</Typography>
                                </Card>
                            </Grid>
                        </>
                    ) : (
                        <>
                            <Grid item xs={4}>
                                <Typography sx={{ textAlign: 'start', fontWeight: 'bold', }}>{(item.replace("_", " ") + ":").toUpperCase()}</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Card sx={{ bgcolor: 'rgba(0, 0, 0, .5)', border: 2, borderRadius: 2, }}>
                                    <Typography color={'white'} sx={{ textAlign: 'center' }}>{(informacion[item]).toUpperCase()}</Typography>
                                </Card>
                            </Grid>
                        </>
                    )}
                </Fragment>
            ))
            }
        </Grid >
    )
}

export default InfoPartido