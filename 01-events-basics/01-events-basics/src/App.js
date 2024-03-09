import React from 'react';

function App() {

  const pop = () => {
    alert("Pop goes the weasel!")
  }

  return (
    <React.Fragment>
    <button style={{
      backgroundColor: "yellow",
      color: "black",
      margin: "10px",
      width: "200px",
      height: "100px"
    }} onClick={pop}>Press me</button>
    </React.Fragment>
  );
}

export default App;


