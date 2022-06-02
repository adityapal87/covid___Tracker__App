import React from 'react';
import { Card,CardContent,Typography,Grid } from '@material-ui/core';
// import {Typography} from '@material-ui/core';
import CountUp from "react-countup";
import cx from "classnames";

const Cards = () => {
    return(
        <div >
        <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3}>
        <CardContent>
            <Typography color="textSecondary" />

        </CardContent>
        </Grid>
        </Grid>
        
        </div>
    );
}

export default Cards;