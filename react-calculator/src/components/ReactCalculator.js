import React from 'react';
import {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Display from './Display';
import Keypad from './Keypad';

const ReactCalculator = () => {
    return(
        <div className="ReactCalculator">
            <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="flex-start">
                <Grid item xs>
                    <Display></Display>
                </Grid>
                <Grid item xs>
                    <Keypad></Keypad>
                </Grid>
            </Grid>
        </div>
    );
}

export default ReactCalculator;