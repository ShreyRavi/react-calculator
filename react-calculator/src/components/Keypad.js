import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const Keypad = ({}) => {
    return(
        <Grid container spacing={12}>
            <Grid container item xs={12} spacing={30}>
                <Button color="secondary">AC </Button>
                <Button color="primary">+/-</Button>
                <Button color="primary"> % </Button>
                <Button color="primary"> / </Button>
            </Grid>
            <Grid container item xs={12} spacing={30}>
                <Button color="primary"> 7 </Button>
                <Button color="primary"> 8 </Button>
                <Button color="primary"> 9 </Button>
                <Button color="primary"> x </Button>
            </Grid>
            <Grid container item xs={12} spacing={30}>
                <Button color="primary"> 4 </Button>
                <Button color="primary"> 5 </Button>
                <Button color="primary"> 6 </Button>
                <Button color="primary"> - </Button>
            </Grid>
            <Grid container item xs={12} spacing={30}>
                <Button color="primary"> 1 </Button>
                <Button color="primary"> 2 </Button>
                <Button color="primary"> 3 </Button>
                <Button color="primary"> + </Button>
            </Grid>
            <Grid container item xs={12} spacing={30}>
                <Button color="primary"> 0 </Button>
                <Button color="primary"> . </Button>
                <Button color="primary"> = </Button>
                <Button color="default"> ? </Button>
            </Grid>
        </Grid>
    );
}

export default Keypad;