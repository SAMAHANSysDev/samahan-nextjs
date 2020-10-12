import React from "react";
import Nav from "navigation/nav";
import NavBurger from "navigation/nav-burger";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import { fade, makeStyles } from "@material-ui/core/styles";

import MenuIcon from "@material-ui/icons/Menu";

import { cdnURL } from "utils/constants";

const useStyles = makeStyles(theme => ({
    samahanLogo: {
        width: "calc(180px + 1.5vw)",
        marginTop: "10px",
        marginBottom: "10px",
    },
    motionLogo: {
        width: "calc(80px + 1vw)",
        marginTop: "10px",
        marginBottom: "10px",
    },
    root: {
        flexGrow: 1,
    },
    title: {
        margin: "auto",
    },
    secondaryLogo: {
        display: "block",
    },
    menuButton: {
        marginRight: theme.spacing(2),
        display: "block",
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
}));

function SearchAppBar() {
    const classes = useStyles();
    const [drawer, setDrawer] = React.useState(false);

    const toggleDrawer = open => event => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setDrawer(open);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="primary" elevation={0}>
                <Toolbar>
                    <IconButton
                        onClick={toggleDrawer(true)}
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        anchor={"left"}
                        open={drawer}
                        onClose={toggleDrawer(false)}
                    >
                        <NavBurger onChosen={() => setDrawer(false)} />
                    </Drawer>
                    <div className={classes.title}>
                        <img
                            className={classes.samahanLogo}
                            src={`${cdnURL}/Samahan-Top-Bar-Logo.png`}
                        />
                    </div>
                    <Nav />
                    <div className={classes.secondaryLogo}>
                        <img
                            className={classes.motionLogo}
                            src={`${cdnURL}/More-in-Motion.png`}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

// Connect the Header component to get access to the `state` in it's `props`
export default SearchAppBar;
