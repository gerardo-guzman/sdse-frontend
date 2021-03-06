import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const aboutStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    flexGrow: 1,
    margin: '1rem',
    padding: '0.6rem',
  },
  paper: {
    padding: theme.spacing(1),
  },
  chip: {
      margin: theme.spacing(0.5),
  },
  cardChip: {
      margin: theme.spacing(0.3),
  },
  cardBg: {
      backgroundColor: "#bdbdbd",
  }
}),
);