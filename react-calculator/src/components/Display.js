import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(t => ({
    root: {
        '& .MuiTextField-root': {
            width: 255,
        }
    }
}));

const Display = ({content}) => {
    const css = styles();
    return(
        <div className={css.root}>
            <TextField 
            InputProps={{readOnly: true,}} 
            className="display" 
            variant="outlined">
                {content}
            </TextField>
        </div>
    );
}

export default Display;