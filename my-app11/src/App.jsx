import React from "react";
import { useState } from "react";

// name, setName ==> 'String'
// flag, setFlag ==> Boolean (True, False)
// step, setStep ==> Number
// array, setArray ==> Array ([])



function initialvalue() {
    console.log("Function called");
    return 0;
};

function App() {
    const [name, setName] = useState("18");
    const [flag, setFlag] = useState(false);
    // const [step, setStep] = useState(0);
    const [step, setStep] = useState(initialvalue());
    const [names, setNames] = useState([]);

    function changeName() {
        console.log("Clicked");
        return setFlag(!flag);
    };

    function increment() {
        setStep((prevstate) => prevstate + 1);
        setStep((prevstate) => prevstate + 1);
    };

    function decrement() {
        return setStep(step - 1);
    };

    function addNames() {
        e.preventDefault();
        setNames([...names, { id: names.length, name }]);                       // ... => Spread operator.
        setName("");
    };

    return (
        <div>
            <div>Hello, {flag ? name : "king"}</div>
            <button onClick={changeName}>Clicked</button>
            <hr />
            <button onClick={increment}> + </button>
            <div>{step}</div>
            <button onClick={decrement}> - </button>


            <form action="" onSubmit={addNames}>
                <input type="text" placeholder="addArray" onChange={(e) => setName(e.target.value)} />
                <button>Submit</button>
            </form>
            <hr />

            <ul>
                {names.map((item) => {
                    <li key={item.id}>{item.name}</li>              // Todo List.
                })}
            </ul>
        </div>
    );
};

export default App;