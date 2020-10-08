import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

//styles
import { NavBarClasses } from './NavBar.styles';

export default function NavBar() {
    const classes = NavBarClasses();
    const [menuToggle, setMenuToggle] = useState<null | HTMLElement>(null);
    const [isLogged, setLogged] = useState(false);

    const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
        setMenuToggle(event.currentTarget);
    }

    const handleMenuClose = () => {
        setMenuToggle(null);
    }

    const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

    return (
        <div className={classes.root}>
            <AppBar color="primary" position="static">
                <Toolbar>
                    {
                        isLogged?
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
                        <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Favoritos</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Profesores</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Cerrar sesión</MenuItem>
                    </Menu>
                    </> :
                    <Button color="inherit" className={classes.title} >
                            <Link href="#"onClick={preventDefault} color="inherit">
                                Ingresa
                            </Link>
                        
                    </Button>
                    }
                        <Button color="inherit" className={classes.title} >
                            <Link href="#"onClick={preventDefault} color="inherit">
                                Acerca
                            </Link>
                        </Button>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Busca un proyecto ..."
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                    </Toolbar>
                </AppBar>
        </div>
    );
}

