import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link as RouterLink } from 'react-router-dom';
import { CopyrightLabel } from '../components/CopyrightLabel';

// hooks
import { useValidation } from '../hooks/useValidation';
import { signupValidations } from '../validations/signup.validations';

// Styles
import { signupStyles } from './signup.styles';



export const SignUp = () => {
  const classes = signupStyles();
  const [
    inputValues,
    handleInputChange,
    errors
  ] = useValidation({
    fistName: '',
    lastName: '',
    email: '',
    password: '',
    school: '',
  }, signupValidations.errors);
  const {
    firstName,
    lastName,
    email,
    password,
    school
  } = inputValues;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Registro
        </Typography>
        <form className={classes.form} noValidate>
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
                onChange={(e) => handleInputChange(e, signupValidations.firstnameValidation)}
                error={errors.firstName}
                helperText={errors.firstName?"Números y carácteres especiales no válidos":null}
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
                onChange={(e) => handleInputChange(e, signupValidations.lastNameValidation)}
                error={errors.lastName}
                name="lastName"
                helperText="Números y carácteres especiales no válidos"
                autoComplete="lname"
                
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={email || ''}
                onChange={(e) => handleInputChange(e, signupValidations.emailValidation)}
                error={errors.email}
                id="email"
                label="Correo institucional"
                name="email"
                helperText="Se requiere un correo institucional"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={password || ''}
                onChange={(e) => handleInputChange(e, signupValidations.passwordValidation)}
                error={errors.password}
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                helperText="La contraseña debe ser mayor a 8 cáracteres"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                value={school || ''}
                onChange={(e) => handleInputChange(e, signupValidations.schoolValidation)}
                fullWidth
                name="school"
                label="Escuela"
                helperText="Este campo es obligatorio"
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
  );
}