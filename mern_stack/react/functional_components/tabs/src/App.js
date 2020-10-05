import React, { useState } from 'react';
import './App.css';

// the server runs and this function is invoked
function App() { 
  // create a list of 'tabs'
  const tabs = [ 
    { label: "Tab 1", content: "Tab 1 Content"},
    { label: "Tab 2", content: "Tab 2 Content"},
    { label: "Tab 3", content: "Tab 3 Content"},
  ];
  
  // this is where we initialize state and set the zero index to be the initial
  const [thisIdx, setThisIdx] = useState(0);

  // handle the styling of our elements --> so far we have 'tab'(s) 1-3 and a bottom details box to style
  const contentStyle = {
    border: "1px solid black",
    padding: "10px",
    marginTop: "15px"
  };

  // this will allow us to build the actual html that is returned
  return (
    <div className="App">
      {/* implement styling for this div */}
      <div style={{ display: "flex", justifyContent: "center", paddingTop: "30px"}}>
        {/* 'map' will allow us loop through the individual items in our 'tabs' list! 'tabs' is an array of objects */}
        {tabs.map((tab, i) => {
            const labelStyles = {
              border: "1px solid black",
              padding: "10px 70px",
              margin: "0 10px",
            };

            if (i == thisIdx) {
              labelStyles.backgroundColor = "black";
              labelStyles.color = "yellow"
            }
          // we put a 'onClick' event listener on the h2 tag that will call the 'setThisIdx' method and pass it the index
          return <h2 key={i} style={labelStyles} onClick={(e) => { setThisIdx(i) }}>
            {/* display the tab label */}
            {tab.label}
          </h2>
        })}
      </div>
      <div style={contentStyle}>
        <h2>{tabs[thisIdx].content}</h2>
      </div>
    </div>
  );
}

export default App;
