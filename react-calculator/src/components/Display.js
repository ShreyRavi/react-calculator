import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(t => ({
    root: {
        '& .MuiTextField-root': {
            width: 255,
            textAlign: 'right',
        },
        textAlign: 'right',
    },
    display: {
        textAlign: 'right',
    },
}));

const Display = ({content}) => {
    const css = styles();
    return(
        <div className={css.root}>
            <TextField 
            InputProps={{readOnly: true,}} 
            className={css.display} 
            variant="outlined" value={content}>
            </TextField>
        </div>
    );
}

export default Display;