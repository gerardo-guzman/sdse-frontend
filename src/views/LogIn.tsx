import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link as RouterLink } from 'react-router-dom';
// components
import { CopyrightLabel } from '../components/CopyrightLabel';
// hooks
import { useLoginForm } from '../hooks/useLoginForm';
// styles
import { loginStyles } from './login.styles';

export const LogIn = () => {
    const classes = loginStyles();
    const {
      inputValues,
      handleInputChange,
      passwordValidator,
      emailValidator,
      errEM, errPW, 
    } = useLoginForm();
    const {
      email,
      password
    } = inputValues;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      passwordValidator(password);
      emailValidator(email);
      if (areEmpty()) {
        console.log('estan vacios');
        return;
      }
      

    }

    const areEmpty = () => {
      if (email.length < 1 ||
        password.length < 1) {
          return true;
        } else {
          return null;
        }
    }

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Ingresar
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              placeholder="alumno1500@alumno.ipn.mx"
              fullWidth
              id="email"
              label="Correo institucional"
              name="email"
              autoComplete="email"
              value={email || ''}
              error={errEM}
              onChange={(e: any) => {
                handleInputChange(e);
                emailValidator(e.currentTarget.value);
              }}
              helperText="Ingresa un correo institucional."
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={password || ''}
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              error={errPW}
              helperText="Escribe tu contraseña"
              autoComplete="current-password"
              onChange={(e: any) => {
                handleInputChange(e);
                passwordValidator(e.currentTarget.value);
              }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Permanecer registrado."
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Olvidé mi Contraseña
                </Link>
              </Grid>
              <Grid item>
                <Link variant="body2" component={ RouterLink } to='/registrarse' >
                  {"¿No tienes cuenta? Regístrate aquí."}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <CopyrightLabel />
        </Box>
      </Container>
    );
}
