import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export const CopyrightLabel = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://www.ipn.mx/">
          Instituto Politécnico Nacional
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    )
};
