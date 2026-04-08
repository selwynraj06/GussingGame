import { useState } from "react";
import "./Game.css";
import Result from "./Result";

    const number = Math.floor(Math.random() * 100) + 1;
function Game() {
    
    let [guess, setGuess] = useState("");
    const  handleChange = (e) => {setGuess(Number(e.target.value))};
    
    return (
        <> 
            <div className="box">
                <h1>Guess the Number</h1><br/>
                <label>Enter any number between 1 and 100:</label><br/>
                <input type="text" name="guess" value={guess} onChange={handleChange} />
                <br/>
                {/* <p>Your Guess: {contdition(guess)}</p> */}
                <Result number={number} guess={guess} />
            </div>
        </>
    );
}
export default Game;