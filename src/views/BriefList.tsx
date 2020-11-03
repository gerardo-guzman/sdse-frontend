import React from 'react';
import queryString from 'query-string';
import { useParams } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { BriefComponent } from '../components/Brief.component';
// styles
import { briefListStyles } from './briefList.styles';

export const BriefList = ({ history }: any) => {
    const classes = briefListStyles();
    const { query }: any = useParams();
    console.log(query);

    return (
        <div className={classes.root}>
            <Grid container spacing={2} direction="row" alignItems="center">
                <Grid item xs={12} >
                    <BriefComponent />
                </Grid>
            </Grid>
        </div>
    )
}
