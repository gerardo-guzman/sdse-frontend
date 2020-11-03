import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const briefListStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            margin: '1rem',
            padding: '0.6rem'
        }
    }),
)