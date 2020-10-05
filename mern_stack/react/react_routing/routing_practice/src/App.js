import React from 'react';
import { Router } from '@reach/router';
import Home from "./components/Home";
import Message from "./components/Message";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <Message path="/:message" />
        <Message path="/:message/:fontColor/:bgColor" />
      </Router>
    </div>
  );
}

export default App;
