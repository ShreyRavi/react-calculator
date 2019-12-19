import React from 'react';
import {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Display from './Display';
import Keypad from './Keypad';

const ReactCalculator = ({}) => {
    const [displayContent, setDisplayContent] = useState("");
    const [calculation, setCalculation] = useState({
        "firstNumber": NaN,
        "operator": "",
        "secondNumber": NaN,
        "result": NaN
    });
    const calculate = () => {
        try{
            let result = NaN;
            if(calculation["operator"] === "-"){
                result = calculation["firstNumber"] - calculation["secondNumber"];
            }
            else if(calculation["operator"] === "/"){
                result = calculation["firstNumber"] / calculation["secondNumber"];
            }
            else if(calculation["operator"] === "*"){
                result = calculation["firstNumber"] * calculation["secondNumber"];
            }
            else if(calculation["operator"] === "+"){
                result = calculation["firstNumber"] + calculation["secondNumber"];
            }
            else{
                console.log("calculation error");
            }
            let newCalculation = calculation;
            newCalculation["result"] = result;
            setCalculation(newCalculation);
            if(!(isNaN(result))){
                setDisplayContent(result.toString());
            }
            setCalculation({
                "firstNumber": NaN,
                "operator": "",
                "secondNumber": NaN,
                "result": NaN
            });
        }
        catch(e){console.log(e);}
    }
    const save = (operator) => {
        if(isNaN(calculation["firstNumber"])){
            calculation["firstNumber"] = parseFloat(displayContent);
            calculation["operator"] = operator;
            setDisplayContent("");
            return;
        }
        else if(isNaN(calculation["secondNumber"])){
            calculation["secondNumber"] = parseFloat(displayContent);
            setDisplayContent("");
            calculate();
            return;
        }
        else{
            calculate();
        }
    }
    return(
        <div className="ReactCalculator">
            <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="flex-start">
                <Grid item xs>
                    <Display content={displayContent}></Display>
                </Grid>
                <Grid item xs>
                    <Keypad content={displayContent} 
                    updateContent={setDisplayContent}
                    save={save}
                    calculate={calculate}></Keypad>
                </Grid>
            </Grid>
        </div>
    );
}

export default ReactCalculator;