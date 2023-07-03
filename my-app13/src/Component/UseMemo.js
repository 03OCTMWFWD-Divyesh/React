import React from 'react';
import { useState, useMemo } from "react";

function Memo (){
    const [myNumber, setNumber] = useState (1);
    const [value, setValue] = useState (0);
    const factOfNumber = useMemo (() => factorialOf (myNumber), [myNumber]);
    // const factOfNumber = factorialOf (myNumber);

    const onChange = (event) => {
        setNumber (Number (event.target.value));
    };

    const onClick = () => setValue ((i) => i+1);

    return (
        <div>
            Factorial Of Number :
            <input type='number' value={myNumber} onChange={onChange}></input> is {factOfNumber}
            <button onClick={onClick}>Re-render</button>
        </div>
    )

    function factorialOf (n) {
        console.log("Factorial of number is : ");
        return n<=0 ? 1 : n*factorialOf(n-1)
    };
};
export default Memo;