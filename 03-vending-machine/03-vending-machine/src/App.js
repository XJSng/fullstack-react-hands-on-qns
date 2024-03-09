import React, { useState } from 'react';
import DisplayMessage from './DisplayMessage';

export default function App () {
  const [message, setMessage] = useState('');

  const coffeeMessage = () => {
    setMessage('Dispensing coffee');
  };

  const teaMessage = () => {
    setMessage('Dispensing tea');
  };

  const orangeJuiceMessage = () => {
    setMessage('Dispensing orange juice');
  };


  return (
      <React.Fragment>
        <h1>Drink Vending Machine</h1>
        <div className="display">
          <DisplayMessage message={message}/>
        </div>
        <button onClick={coffeeMessage}>Coffee</button>
        <button onClick={teaMessage}>Tea</button>
        <button onClick={orangeJuiceMessage}>Orange Juice</button>
      </React.Fragment>
    );
  
}


