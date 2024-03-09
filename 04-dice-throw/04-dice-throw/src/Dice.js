import { useState } from "react"

export default function Dice() {

    const [diceResult, rollDice] = useState(1)

    return <div style={{
        padding: "10px",
        "text-align": "center",
        width: "100px",
        height: "50px",
        border: "1px solid black",
        display: "inline-block"
    }}>
        {diceResult}
        <br /><button onClick={() => rollDice(Math.floor(Math.random() * 6) + 1)}>Roll the Dice</button>
    </div>
}


