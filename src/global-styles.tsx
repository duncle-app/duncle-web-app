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
    }

}));

export default useStyles;
