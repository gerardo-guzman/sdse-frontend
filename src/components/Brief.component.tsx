import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
// styles
import { briefCardStyles } from './briefCard.styles';


export const BriefComponent = () => {
    const classes = briefCardStyles();
    return (
        <Paper className={classes.root}>
            <Grid container spacing={1} direction="row">
                <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1">
                        Título 1 lorem ipsum lorem ipsum lorem ipsum
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                <Chip className={classes.keyWord} color="secondary" size="medium" label="key Word 1" />
                <Chip className={classes.keyWord} color="secondary" size="medium" label="key Word 2" />
                <Chip className={classes.keyWord} color="secondary" size="medium" label="key Word 3" />
                <Chip className={classes.keyWord} color="secondary" size="medium" label="key Word 4" />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body2" align="justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="caption">
                        Autor1 apellido1, Autor2 apellido2
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}
