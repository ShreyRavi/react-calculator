import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const Keypad = (
    {
        content, 
        updateContent,
        calculate,
        save,
        help,
    }) => {
    const handleKeyPress = (keyID) => {
        if(keyID === "AC"){
            updateContent("");
        }
        else if(keyID === "+/-"){
            let manipulatedFloat = parseFloat(content);
            manipulatedFloat = -1 * manipulatedFloat;
            updateContent(manipulatedFloat.toString());
        }
        else if(keyID === "%"){
            let manipulatedFloat = parseFloat(content);
            manipulatedFloat = manipulatedFloat / 100.0;
            updateContent(manipulatedFloat.toString());
        }
        else if(keyID === "/"){
            save("/");
        }
        else if(keyID === "7"){
            let manipulatedContent = content;
            manipulatedContent += "7";
            updateContent(manipulatedContent);
        }
        else if(keyID === "8"){
            let manipulatedContent = content;
            manipulatedContent += "8";
            updateContent(manipulatedContent);
        }
        else if(keyID === "9"){
            let manipulatedContent = content;
            manipulatedContent += "9";
            updateContent(manipulatedContent);
        }
        else if(keyID === "x"){
            save("*");
        }
        else if(keyID === "4"){
            let manipulatedContent = content;
            manipulatedContent += "4";
            updateContent(manipulatedContent);
        }
        else if(keyID === "5"){
            let manipulatedContent = content;
            manipulatedContent += "5";
            updateContent(manipulatedContent);
        }
        else if(keyID === "6"){
            let manipulatedContent = content;
            manipulatedContent += "6";
            updateContent(manipulatedContent);
        }
        else if(keyID === "-"){
            save("-");
        }
        else if(keyID === "1"){
            let manipulatedContent = content;
            manipulatedContent += "1";
            updateContent(manipulatedContent);
        }
        else if(keyID === "2"){
            let manipulatedContent = content;
            manipulatedContent += "2";
            updateContent(manipulatedContent);
        }
        else if(keyID === "3"){
            let manipulatedContent = content;
            manipulatedContent += "3";
            updateContent(manipulatedContent);
        }
        else if(keyID === "+"){
            save("+");
        }
        else if(keyID === "0"){
            let manipulatedContent = content;
            manipulatedContent += "0";
            updateContent(manipulatedContent);
        }
        else if(keyID === "."){
            let manipulatedContent = content;
            if((manipulatedContent === "") || (manipulatedContent.indexOf(".") != -1)){
                return;
            }
            manipulatedContent += ".";
            updateContent(manipulatedContent);
        }
        else if(keyID === "="){
            save();
        }
        else if(keyID === "?"){
            
        }
        else{
            //error
            console.log("ERROR: incorrect input to Keypad handleKeyPress(keyID)");
        }
    };
    return(
        <Grid container spacing={12}>
            <Grid container item xs={12} spacing={30}>
                <Button onClick={() => handleKeyPress("AC")} color="secondary">AC </Button>
                <Button onClick={() => handleKeyPress("+/-")} color="primary">+/-</Button>
                <Button onClick={() => handleKeyPress("%")} color="primary"> % </Button>
                <Button onClick={() => handleKeyPress("/")} color="primary"> / </Button>
            </Grid>
            <Grid container item xs={12} spacing={30}>
                <Button onClick={() => handleKeyPress("7")} color="primary"> 7 </Button>
                <Button onClick={() => handleKeyPress("8")} color="primary"> 8 </Button>
                <Button onClick={() => handleKeyPress("9")} color="primary"> 9 </Button>
                <Button onClick={() => handleKeyPress("x")} color="primary"> x </Button>
            </Grid>
            <Grid container item xs={12} spacing={30}>
                <Button onClick={() => handleKeyPress("4")} color="primary"> 4 </Button>
                <Button onClick={() => handleKeyPress("5")} color="primary"> 5 </Button>
                <Button onClick={() => handleKeyPress("6")} color="primary"> 6 </Button>
                <Button onClick={() => handleKeyPress("-")} color="primary"> - </Button>
            </Grid>
            <Grid container item xs={12} spacing={30}>
                <Button onClick={() => handleKeyPress("1")} color="primary"> 1 </Button>
                <Button onClick={() => handleKeyPress("2")} color="primary"> 2 </Button>
                <Button onClick={() => handleKeyPress("3")} color="primary"> 3 </Button>
                <Button onClick={() => handleKeyPress("+")} color="primary"> + </Button>
            </Grid>
            <Grid container item xs={12} spacing={30}>
                <Button onClick={() => handleKeyPress("0")} color="primary"> 0 </Button>
                <Button onClick={() => handleKeyPress(".")} color="primary"> . </Button>
                <Button onClick={() => handleKeyPress("=")} color="primary"> = </Button>
                <Button onClick={() => handleKeyPress("?")} color="default"> ? </Button>
            </Grid>
        </Grid>
    );
}

export default Keypad;