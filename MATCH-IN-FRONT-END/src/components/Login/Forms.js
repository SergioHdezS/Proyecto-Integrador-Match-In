import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";
import { Button, Grid } from "@mui/material";
import { inicioSesion } from "../../services/login";

const initialLogin = [{
  mail: '',
  password: ''
}]

const FormComponent = () => {

  const [login, setLogin] = useState(initialLogin);
  const { mail, password } = login;

  const handleInputChange = (e) => {
    const changedFormValue = {
      ...login,
      [e.target.name]: e.target.value
    }
    setLogin(changedFormValue);
  }

  useEffect(() => {
    setLogin({
      mail: '',
      password: ''
    }
    )
  }
    , []);

  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/home", {}, [navigate]))

  async function funcionDoble() {
    const response = await inicioSesion(login);
    if (response === 'Success') {
      handleOnClick();
    } else {
      alert(response);
    }
  }

  return (
    <div class="container-fluid login">
      <br />
      <br />
      <div class="card-contenedor">
        <center><b>Inicio de Sesión</b></center>
        <link rel="stylesheet" href="form.css" />
        <div class="container-fluid">
          <form>
            <div class="mb-3">
              <label for="InputEmail1" class="form-label">
                <b>EMAIL</b>
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="mail"
                value={mail}
                onChange={handleInputChange}
                required
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                <b>CONTRASEÑA</b>
              </label>
              <input
                type="password"
                class="form-control"
                id="InputPassword1"
                name="password"
                value={password}
                onChange={handleInputChange}
                required
              />
            </div>
            <center>
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button style={{
                  color: 'black',
                  background: 'white',
                  textAlign: 'center'
                }}
                  variant="contained"
                  onClick={funcionDoble}
                >
                  Iniciar Sesión</Button>
              </Grid>
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <p style={{ color: 'white' }}><a href="">Necesito ayuda para iniciar sesión</a></p>
              </Grid>
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <p style={{ color: 'white' }}>¿No tienes cuenta? <a href='/register'>Registrate</a></p>
              </Grid>
            </center>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
