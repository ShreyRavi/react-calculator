import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const Keypad = (
    {
        content, 
        updateContent,
        showingResult,
        setShowingResult,
        save,
        ac,
        help,
    }) => {
    const toggleShowingResult = () => {
        setShowingResult(!showingResult);
    }
    const handleKeyPress = (keyID) => {
        if(keyID === "AC"){
            ac();
        }
        else if(keyID === "+/-"){
            let manipulatedFloat = parseFloat(content);
            manipulatedFloat = -1 * manipulatedFloat;
            if(isNaN(manipulatedFloat)){return;}
            updateContent(manipulatedFloat.toString());
        }
        else if(keyID === "%"){
            let manipulatedFloat = parseFloat(content);
            manipulatedFloat = manipulatedFloat / 100.0;
            if(isNaN(manipulatedFloat)){return;}
            updateContent(manipulatedFloat.toString());
        }
        else if("/*+-=".includes(keyID)){
            save(keyID);
        }
        else if("0123456789".includes(keyID)){
            let manipulatedContent = content;
            if(!showingResult){
                if((parseFloat(manipulatedContent) === 0) && (!(manipulatedContent.includes(".")))){
                    manipulatedContent = keyID;
                }
                else{
                    manipulatedContent += keyID;
                }
            }
            else{
                manipulatedContent = keyID;
                toggleShowingResult();
            }
            updateContent(manipulatedContent);
        }
        else if(keyID === "."){
            let manipulatedContent = content;
            if((manipulatedContent === "") || (manipulatedContent.includes(".")) || showingResult){
                return;
            }
            manipulatedContent += ".";
            updateContent(manipulatedContent);
        }
        else if(keyID === "?"){
            help();
        }
        else{
            //error
            console.log("ERROR: incorrect input to Keypad handleKeyPress(keyID)");
        }
    };
    return(
        <Grid container>
            <Grid container item xs={12}>
                <Button onClick={() => handleKeyPress("AC")} color="secondary">AC </Button>
                <Button onClick={() => handleKeyPress("+/-")} color="primary">+/-</Button>
                <Button onClick={() => handleKeyPress("%")} color="primary"> % </Button>
                <Button onClick={() => handleKeyPress("/")} color="primary"> ÷ </Button>
            </Grid>
            <Grid container item xs={12}>
                <Button onClick={() => handleKeyPress("7")} color="primary"> 7 </Button>
                <Button onClick={() => handleKeyPress("8")} color="primary"> 8 </Button>
                <Button onClick={() => handleKeyPress("9")} color="primary"> 9 </Button>
                <Button onClick={() => handleKeyPress("*")} color="primary"> × </Button>
            </Grid>
            <Grid container item xs={12}>
                <Button onClick={() => handleKeyPress("4")} color="primary"> 4 </Button>
                <Button onClick={() => handleKeyPress("5")} color="primary"> 5 </Button>
                <Button onClick={() => handleKeyPress("6")} color="primary"> 6 </Button>
                <Button onClick={() => handleKeyPress("-")} color="primary"> − </Button>
            </Grid>
            <Grid container item xs={12}>
                <Button onClick={() => handleKeyPress("1")} color="primary"> 1 </Button>
                <Button onClick={() => handleKeyPress("2")} color="primary"> 2 </Button>
                <Button onClick={() => handleKeyPress("3")} color="primary"> 3 </Button>
                <Button onClick={() => handleKeyPress("+")} color="primary"> + </Button>
            </Grid>
            <Grid container item xs={12}>
                <Button onClick={() => handleKeyPress("0")} color="primary"> 0 </Button>
                <Button onClick={() => handleKeyPress(".")} color="primary"> . </Button>
                <Button onClick={() => handleKeyPress("=")} color="primary"> = </Button>
                <Button onClick={() => handleKeyPress("?")} color="default"> ? </Button>
            </Grid>
        </Grid>
    );
}

export default Keypad;