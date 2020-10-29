import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
// components
import { CopyrightLabel } from '../components/CopyrightLabel';
// hooks
import { useSignupForm } from '../hooks/useSignupForm';
// Styles
import { signupStyles } from './signup.styles';

export const SignUp = () => {
  const classes = signupStyles();
  const {
    inputValues,
    handleInputChange,
    firstnameValidation,
    lastNameValidation,
    passwordValidation,
    emailValidation,
    schoolValidation,
    errFN, errLN, 
    errPW, errEM, 
    errSc, 
  } = useSignupForm();
  const {
    firstName,
    lastName,
    email,
    password,
    school
  } = inputValues;
  const [ openAlert, setAlertState ] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    lastNameValidation(lastName);
    passwordValidation(password);
    emailValidation(email);
    schoolValidation(school);
    firstnameValidation(firstName);
    if (errFN || errLN || errPW || errEM || errSc) {
      setAlertState(true);
      return;
    }
    
  }


  return (
    <>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Registro
        </Typography>
        <form className={classes.form} noValidate
          onSubmit={handleSubmit}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                value={firstName || ''}
                id="firstName"
                label="Nombre(s)"
                onChange={(e: any) => {
                  handleInputChange(e);
                  firstnameValidation(e.currentTarget.value);
                }}
                error={errFN}
                helperText="Escribe un nombre válido."
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={lastName || ''}
                id="lastName"
                label="Apellido(s)"
                onChange={(e: any) => {
                  handleInputChange(e)
                  lastNameValidation(e.currentTarget.value);
                }}
                error={errLN}
                name="lastName"
                helperText="Escribe tus apellidos"
                autoComplete="lname"
                
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                placeholder="alumno1500@alumno.ipn.mx"
                fullWidth
                value={email || ''}
                onChange={(e: any) => {
                  handleInputChange(e);
                  emailValidation(e.currentTarget.value);
                }}
                error={errEM}
                id="email"
                label="Correo institucional"
                name="email"
                helperText="Escribe un correo institucional"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={password || ''}
                onChange={(e: any) => {
                  handleInputChange(e);
                  passwordValidation(e.currentTarget.value);
                }}
                error={errPW}
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                helperText="Escribe una contraseña de al menos 8 caracteres."
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                value={school || ''}
                onChange={(e: any) => {
                  handleInputChange(e)
                  schoolValidation(e.currentTarget.value);
                }}
                fullWidth
                name="school"
                label="Escuela"
                error={errSc}
                helperText="Este campo es obligatorio."
                id="school"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Registrarse
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link variant="body2" component={ RouterLink } to='/login' >
                ¿Ya tienes cuenta? Ingresa aquí.
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <CopyrightLabel />
      </Box>
    </Container>
    <Snackbar open={openAlert} autoHideDuration={3500} onClose={() => setAlertState(false)}>
      <Alert variant="filled" onClose={() => setAlertState(false)} severity="error">
        Verifica que todos los campos se hallan llenado correctamente.
      </Alert>
    </Snackbar>
    </>
  );
}