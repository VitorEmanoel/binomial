import React from "react";
import {Toolbar} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

export const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    Probabilidade binominal
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
