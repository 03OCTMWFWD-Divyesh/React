// (1)

// import Post from "./component/Post";

// function App() {
//   return (
//     <div>Hello React
//       <Post />
//     </div>
//   )
// }

// export default App;



// (2)

// import Post from "./component/Post";

// function App (){
//   return (
//     <div><Post /></div>
//   )
// }

// export default App;



// (3)

// import Post from "./component/Post";

// function App (){
//   return (
//     <div><Post /></div>
//   )
// }

// export default App;



// (4)

// import Post from "./component/Post";

// function App (){
//   return <Post />
// }

// export default App;





// (5) 

import Post from "./component/Post";

function App() {
  return (
    <div>
      <main>
        <Post author="King" body="kohli" />
        <Post author="siraj" body="73" />
        <Post author="Mr" body="360" />
        <Post author="chahal" body="chatur" />
      </main>
    </div>
  )
}

export default App;

