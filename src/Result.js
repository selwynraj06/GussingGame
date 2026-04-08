import React from "react";

function Result({number,guess}){
    let result;
    if(guess){
        if(guess > number){
            result = "You Gussed Higher"; 
        }else if(guess < number){
            result = "You Gussed Lower";
        }
        else if(guess == number){
            result = "You Correctly Gussed the number";
        }
        else{
            result = "You enter the Invalid input";
        }
    }else{
        result = "Please enter your guess";
    }
    return (
            <h3>{result}</h3>
    );
}
export default Result;