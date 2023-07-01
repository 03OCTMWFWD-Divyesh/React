import React from 'react';
import './App.css';
import UseRef from './Component/UseRef';
import Memo from './Component/UseMemo';


function App() {
  return (
    <div className="App">
      <UseRef />
      <hr></hr>
      <Memo />
    </div>
  );
}

export default App;
