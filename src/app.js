import React from "react";
import HelloWorld from "./helloworld";

function App() {
  return (
    <div>
      <HelloWorld />
      <h3>Date : {new Date().toDateString()}</h3>
    </div>
  );
}

export default App;
