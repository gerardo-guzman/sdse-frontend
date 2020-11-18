import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const briefCardStyles = makeStyles((theme: Theme) =>
createStyles({
    root: {
        padding: theme.spacing(1),
        backgroundColor: "#bdbdbd",
    },
    keyWord: {
        margin: theme.spacing(0.5)
    }
}));