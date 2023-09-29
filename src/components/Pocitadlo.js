import { useState } from "react"
import IncreseButon from "./IncreseButton"
import DecreseButon from "./DecreseButton"

const Pocitadlo = () => {

    const [counter, setCounter] = useState(0)

    const buttonIncrementHandler = () => {
        setCounter(counter + 1)
    }

    const buttonDecrementHandler = () => {
        if ( counter > 0 ) setCounter(counter - 1)
    }

    const buttonResetCounter = () => {
        setCounter(0)
    }

    return (
        <div className="pocitadlo">
            <h3>Počítalo</h3>
            <div>{counter}</div>
            <IncreseButon increse={buttonIncrementHandler}/>
            <DecreseButon decrese={buttonDecrementHandler}/>
            <button type="button" onClick={buttonResetCounter}>Reset</button>
        </div>
    )
}

export default Pocitadlo