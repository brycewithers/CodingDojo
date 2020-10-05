import React, { useState } from 'react';
import Form from "./components/Form";
import './App.css';

function App() {
  const [boxes, setState] = useState([]);
  return (
    <div className="App">
      <Form inputs={boxes} setInputs={setState}/>
      {boxes.map((box, i) => {
        return(
          <div key={i}>
            <Box inputs={box}/>
          </div>
        );
      })}
    </div>
  );
}

export default App;
