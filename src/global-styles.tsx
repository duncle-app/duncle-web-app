import {makeStyles} from "@material-ui/core";

const patsGold: string = "#ffb612";

const useStyles = makeStyles((theme) => ({
    /* ...style2, */
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
        backgroundColor: theme.palette.background.paper,
    },
}));

export default useStyles;
