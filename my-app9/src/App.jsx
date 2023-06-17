// import React from "react";

// function App (){
//   return (
//     <div>Hello King</div>
//   )
// }

// export default App;



import React from "react";
import PostList from "./component/PostList";

function App (){
    return (
        <div>
            <PostList />
        </div>
    )
}

export default App;





// * useState :-
// (1) useState ko function ke sath nahi likh sakte.     -----> (React mai first function nhi component hai uske sath useState ko likh sakte hai)
// (2) useState ko if else ke sath bhi nahi likh sakte hai.



// (1) String :-

//    import React from "react";
//    import { useState } from "react";

//    function App (){
//     const [name, setName] = useState ('king');

//     function changeName(){
//         console.log("You have clicked the function");
//         setName ("Abd");
//     }

//     return(
//         <div className="div">Hello {name}
//         <div><button onClick={changeName}>Clicked it</button></div>
//         </div>
//     )
//    }

//    export default App;




// (2) Boolean :-

// import React from "react";
// import { useState } from "react";

// function App() {
//     const [name, setName] = useState("King");
//     const [flag, setFlag] = useState(false);
//     // const [flag, setFlag] = useState(true);

//     function changeName() {
//         console.log("You have clicked the function");
//         setName ("Abd-360");
//         setFlag (!flag);
//         // setFlag (flag);
//     }

//     return (
//         <div className="div">Hello {flag ? name : "Dk"}
//             <div><button onClick={changeName}>Cliked</button></div>
//         </div>
//     )
// }

// export default App;



// (3) Number :-

// import React from "react";
// import { useState } from "react";

// function App (){
//     const [name, setName] = useState ("King-Kohli");
//     const [flag, setFlag] = useState (false);
//     const [step, setStep] = useState (0);

//     function changeName (){
//         console.log("You have clicked the function");
//         setName ("Virat-kohli");
//         setFlag (!flag);
//     }

//     function increment (){
//         // return setStep (step + 1);

//         setStep ((plus) => plus + 2);
//         setStep ((plus) => plus + 1);

//     }

//     function decrement (){
//         // return setStep (step - 1);

//         setStep ((minus) => minus - 1);
//         setStep ((minus) => minus - 1);
//     }

//     return (
//         <div className="div">Hello {flag ? name : ""}
//         <div><button onClick={changeName}>Clicked</button></div>
//         <hr />
//         <div><button onClick={increment}>+</button></div>
//         <p>{step}</p>
//         <div><button onClick={decrement}>-</button></div>
//         </div>
//     )
// }
// export default App;