
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Hello React</h1>
        <Virat />
      </div>
    </div>
  );
}



function Virat(){
  return(
    <div className='App'>
      <div className='App-header'>
        <ul>
          <li>king kohli</li>
        </ul>
      </div>
    </div>
  )
}

// function vk(){
//   let nm = "King";
//   return(
//     <div className="App">
//       <div className='App-header'>
//         Hello {nm}
//       </div>
//     </div>
//   )
// }



// function dk(){
//   let nm = "fruites";
//   let className = "App-header"
//   return(
//     <div className="App">
//       <div className={className}>
//         Hyy {nm}
//       </div>
//     </div>
//   )
// }



export default App;
// export default vk;
// export default virat;