import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// styles
import { aboutStyles } from './about.styles';

export const About = () => {
    const classes = aboutStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper >
                        ABOUT
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}
