import React from 'react';
import {useRef} from "react";

function UseRef (){
    const countRef = useRef (0);

    const handleData = () => {
        countRef.current++;
        console.log(`You clicked ${countRef.current} time`);
    };

    console.log("You rendered me!!");
    return (
        <button onClick={handleData}>Click Me</button>
    );
};
export default UseRef;