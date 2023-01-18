import { Avatar, Button, Card, CardContent, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import Background from '../components/Background/Background';
import Comentario from '../components/Comentario/Comentario';
import InfoPartido from '../components/InfoPartido/InfoPartido';
import BasicRating from '../components/Rating/Estrellas';
import img from '../assets/img/chupeteSuazo.png';
import { NavBarConLog } from '../components';


const Post = () => {
  return (
    <Background image="images/fondoPublicacion.png">
      <Grid container >
        <Grid item xs={12}>
          <NavBarConLog></NavBarConLog>
        </Grid>
        <Grid item
          xs={3}
          spacing={2}
          padding={"1em"}
        >
          <center>
            <Card sx={{
              display: 'flex',
              flexDirection: 'column',
              bgcolor: 'rgba(0, 0, 0, .5)',
              color: 'white',
              p: 0.5,
              mb: 2,
              border: 2,
              borderRadius: 2,
              borderColor: 'black'
            }}>
              <CardContent>
                <h5>CREADOR</h5>
              </CardContent>
              <Box>
                <Avatar
                  alt="Chupete Suazo"
                  src={img}
                  sx={{ width: 150, height: 150 }} />
              </Box>
              <Box>
                <BasicRating></BasicRating>
              </Box>
            </Card>
          </center>
          <center>
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
              width: 200
            }}>
              <Button sx={{ color: 'black' }}>Solicitar Unirse</Button>
            </Grid>
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
              width: 200
            }}>
              <Button sx={{ color: 'black' }}>Reportar</Button>
            </Grid>
          </center>
        </Grid>
        <Grid item
          xs={9}
          spacing={2}
          padding={"1em"}
        >
          <center>
            <Box sx={{
              bgcolor: 'rgba(0, 0, 0, .5)',
              color: 'white',
              p: 0.5,
              mb: 2,
              border: 2,
              borderRadius: 2,
              borderColor: 'black'
            }}>

              <h1>NOMBRE PUBLICACION</h1>
            </Box>
            <InfoPartido></InfoPartido>
          </center>
        </Grid>
        <Grid item xs={12} >
          <Comentario></Comentario>
        </Grid>
      </Grid>
    </Background>
  )
}

export default Post;