import React, { useState } from 'react';
import Form from "./components/Form";
import Return from "./components/Return";
import './App.css';

function App() {
  const [state, setState ] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  return (
    <div className="App">
      <Form inputs={state} setInputs={setState} />
      <Return formInfo={state} />
    </div>
  );
}

export default App;
