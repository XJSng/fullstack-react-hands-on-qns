import React, { useState } from 'react';
import DisplayMessage from './DisplayMessage';

export default function App () {
  const [message, setMessage] = useState('');

  const dispenseCoffee = () => {
    setMessage('Dispensing coffee');
  };

  const dispenseTea = () => {
    setMessage('Dispensing tea');
  };

  const dispenseOrangeJuice = () => {
    setMessage('Dispensing orange juice');
  };


  return (
      <React.Fragment>
        <h1>Drink Vending Machine</h1>
        <div className="display">
          <DisplayMessage message={message}/>
        </div>
        <button onClick={dispenseCoffee}>Coffee</button>
        <button onClick={dispenseTea}>Tea</button>
        <button onClick={dispenseOrangeJuice}>Orange Juice</button>
      </React.Fragment>
    );
  
}


