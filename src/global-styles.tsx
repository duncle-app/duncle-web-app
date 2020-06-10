import { makeStyles } from "@material-ui/core";

const patsGold: string = "#ffb612";

const useStyles = makeStyles((theme) => ({
  appHeader: {
    color: patsGold,
    background: "black",
  },
  cardHeader: {
    color: patsGold,
    background: "#203731",
  },
  appBarItem: {
    marginRight: theme.spacing(2),
  },
  drawer: {
    width: 150,
    maxWidth: 400,
    /* backgroundColor: theme.palette.background.paper, */
    background: "#FFFDD0",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default useStyles;
