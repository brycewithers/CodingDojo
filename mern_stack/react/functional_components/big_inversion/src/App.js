import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Bryce" lastName="Doe" age={25} hairColor="Blonde"/>
      <PersonCard firstName="Mackenzie" lastName="Smith" age={25} hairColor="Brown"/>
      <PersonCard firstName="Monty" lastName="Dog" age={3} hairColor="White"/>
      <PersonCard firstName="Some" lastName="Rando" age={62} hairColor="Purple"/>
    </div>
  );
}

export default App;
