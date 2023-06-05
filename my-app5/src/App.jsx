import React from "react";
import './App.css';

const App = () => {
  return (
    <div>
      <label htmlFor="text">Name</label> <br />
      <input type="text" placeholder="King" required pattern=""/>
    </div>
  )
}

export default App;
