import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function UseEffects (){
    const [time, setTime] = useState (new Date().toString());
    const [msg, setMsg] = useState ("Functional component");


    // * useEffect Start Here :-
    useEffect (() => {
        console.log("Component mounted or updated");
    });


    // => Component not mounted for empty change :
    useEffect (() => {
        console.log("Component mounted or updated");
        const interval = setInterval (showDate, 1000);
    }, [time]);

    // => Unmounted component :
    useEffect (() => {
        console.log("Component mounted or updated");
        const interval = setInterval (showDate, 1000);

        return () => {
            console.log("Cleanup or of interval");
            clearInterval (interval);
        }
    }, [time]);

    const showDate = () => {
        setTime (new Date().toString ());
    };

    return (
        <div>{time}
        <button onClick={showDate}>Show Date</button>
        <div>{msg}</div>
        <button onClick={() => setMsg ("Changed functional component")}>Change msg</button>
        </div>
    );
};

export default UseEffects;