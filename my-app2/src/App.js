import './App.css';
import Form from './form.js';

function App() {

  const name = () => {
    const arr = ["Apple", "Banna", "Mango", "maza"];
    // for(let i =0; i<arr.length; i++)
    // {
    //   let name = Math.floor(Math.random () * arr.length);
    //   return (arr[name]);
    // }
  
    const data = Math.floor (Math.random(arr)*3);
    return arr[data];
  }

  return (
    <div className="App">
      <div>
        Hello {name()} 
      </div>
      <div>
        <Form></Form>
      </div>
    </div>
  );
}

export default App;
