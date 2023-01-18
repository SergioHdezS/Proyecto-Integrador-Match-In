import { Card, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { NavBarConLog } from '../components';
import Background from '../components/Background/Background';
import FormularioCrearPartido from '../components/FormularioCrearPartido/FormularioCrearPartido';
import { addPost, getAllPost } from '../services/Partido';

const CreateMatch = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    getPost();
  }, [])

  const getPost = async () => {
    const postDB = await getAllPost();
    setPost(postDB);
  }

  const postAdd = async (addedPost) => {
    const postDB = await addPost(addedPost);
  }

  return (
    <Background image="images/fondoHistorial.png">
      <Grid container>
        <Grid item xs={12}>
          <NavBarConLog></NavBarConLog>
        </Grid>
        <Grid item xs={12} >
          <center>
            <Card sx={{
              display: 'flex',
              flexDirection: 'column',
              padding: 2,
              backgroundColor: "rgba(0,0,0,0.8)",
              width: 600,
            }}>
              <FormularioCrearPartido postAdd={postAdd} />
            </Card>
          </center>
        </Grid>
      </Grid>
    </Background >
  )
}

export default CreateMatch;