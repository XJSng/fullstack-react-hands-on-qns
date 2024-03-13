import React, {useState} from 'react'

export default function Numbers () {
  
    const [allNumbers, setAllNumbers] = useState([1,3,5,7]);
    const [userNumber, setUserNumber] = useState()
  

    const addRandom = ()=> {
        // 1. clone the allNumbers array in the state
       
        // 2. add a random number to the back of the clone
           // 3. set the cloned array back into the state
        let randomNumber = Math.floor(Math.random() * 10 + 1)
        const cloned = [...allNumbers, randomNumber]     
        setAllNumbers(cloned)
    }

    const addNumber = () => {
        const hasDigit = /[0-9]/.test(userNumber)
        const hasAlphabet = /[a-zA-Z]/.test(userNumber);


        if (!hasDigit || hasAlphabet) {
            return alert("Please enter numbers only!")
        }

        else {
        const cloned = [...allNumbers, userNumber]
        setAllNumbers(cloned)
        }
    }


    return <React.Fragment>
        <ul>
            {allNumbers? allNumbers.map(number=><li
            style={{
                listStyle: "none"
            }}>{number}</li>) 
                        : <p>Loading...</p>}
        </ul>
        <div>
            <button onClick={addRandom}>Add Random</button>
        </div>
        <div>
            <input type="text" name={userNumber}
            onChange={(e)=>{
                setUserNumber(()=> e.target.value)
            }}/>
            <button onClick={addNumber}>Add</button>
        </div>
    </React.Fragment>

}