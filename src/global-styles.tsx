import {makeStyles} from "@material-ui/core";

const patsGold: string = "#ffb612";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    appHeader: {
        flexGrow: 1,
        // color: patsGold,
        // background: "black",
    },
    calendarIcon: {
        height: '2em',
        width: '2em',
        "&:hover, &:focus": {
            color: () => theme.palette.primary.main
        },
    },
    cardHeader: {
        // color: patsGold,
        // background: "#203731",
    },
    center: {
        textAlign: 'center'
    },
    closeInput: {
        paddingRight: "1em"
    },
    content: {
        padding: theme.spacing(1),
    },
    horizontalListItem: {
        flexDirection: 'row',
        display: 'flex',
    },
    muiDrawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    alignToDrawer: {
        paddingLeft: drawerWidth
    },
    padBottom: {
        paddingBottom: theme.spacing(2)
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
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default useStyles;
