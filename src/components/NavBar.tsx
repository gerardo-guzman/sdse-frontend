import React, { useContext, useState } from 'react';
import queryString from 'query-string';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
//import Link from '@material-ui/core/Link';
// styles
import { NavBarClasses } from './NavBar.styles';
// hook
import { useForm } from '../hooks/useForm';
import { useHistory } from 'react-router-dom';

export default function NavBar() {
    const classes = NavBarClasses();
    const history = useHistory();
    const [menuToggle, setMenuToggle] = useState<null | HTMLElement>(null);
    const { user } = useContext(AuthContext);
    const [state, handleInputChange, reset] = useForm({
        query: ''
    });
    const { query } = state;

    const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
        setMenuToggle(event.currentTarget);
    }

    const handleMenuClose = () => {
        setMenuToggle(null);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const encodedQuery = encodeURIComponent(query);
        console.log(encodedQuery);
        history.push(`/briefs/${query}`);


    }

    return (
        <div className={classes.root}>
            <AppBar color="primary" position="static">
                <Toolbar>
                    {
                        user?.logged ?
                    <>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="Opciones de usuario"
                        aria-controls="user-menu"
                        onClick={handleToggle}
                    >
                        <Avatar 
                            alt="profile pic"
                        />
                    </IconButton>
                    <Menu
                        id="user-menu"
                        anchorEl={menuToggle}
                        open={Boolean(menuToggle)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem component={RouterLink} to='/perfil/5' onClick={handleMenuClose}>Perfil</MenuItem>
                        <MenuItem component={RouterLink} to='/favoritos' onClick={handleMenuClose}>Favoritos</MenuItem>
                        <MenuItem component={RouterLink} to='/profesores' onClick={handleMenuClose}>Profesores</MenuItem>
                        <MenuItem component={RouterLink} to='/' onClick={handleMenuClose}>Cerrar sesión</MenuItem>
                    </Menu>
                    </> :
                    <Button color="inherit" className={classes.menuButton} component={ RouterLink } to='/login' >
                        Ingresa
                    </Button>
                    }
                        <Button color="inherit" className={classes.title} component={RouterLink} to='/'>
                            Acerca
                        </Button>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <form onSubmit={handleSubmit}>
                            <InputBase
                                placeholder="Busca un proyecto ..."
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                                value={query || ''}
                                onChange={handleInputChange}
                                name='query'
                            />
                            </form>
                            
                        </div>
                        <div className={classes.spacingBox} >
                                { /* espacio para iconos */ }
                        </div>
                            <IconButton
                                className={classes.rightIcons}
                                color="inherit"
                                aria-label="Opciones de usuario"
                                aria-controls="user-menu"
                                href='https://github.com/gerardo-guzman/sdse-frontend'
                                target="_blank"
                                rel="noopener"
                            >
                                <GitHubIcon />
                            </IconButton>
                    </Toolbar>
                </AppBar>
        </div>
    );
}

