import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
// styles
import { profileClasses } from './profile.styles';


export const ProfileScreen = () => {
    const classes = profileClasses();
    return (
        <div className={classes.root}>
            <Grid container spacing={3} direction="row" justify="center" alignItems="stretch">
                <Grid container item xs={12} md={4} direction="column">

                </Grid>
                <Grid>

                </Grid>
            </Grid>
        </div>
    );
};
