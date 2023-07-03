import React from 'react';
import { usecallback, useMemo, useState } from "react";
import List from './component/List';

function App() {
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    // const getItem = () => {
    //     return [number, number + 1, number + 2];
    // }


    // const getItem = usecallback(() => {
    //     return [number, number + 1, number + 2];
    // }, [number]);


    // const getItem = useMemo (() => {
    //     return [number, number+1, number+2];
    // }, [number]);


    const getItem = usecallback ((increment) => {
        return [number+increment, number+1+increment, number+2+increment];
    }, [number]);


    const theme = {
        backgroundcolor: dark ? '#333' : '#fff',
        color: dark ? '#fff' : '#333'
    };


    return (
        <div className='App'>
            <div style={theme}>
                <input type='number' value={number} onChange={e => setNumber(parseInt(e.target.value))} />
                <button onClick={() => setDark(prevDark => !prevDark)}>Theme Change</button>
                <List getItems={getItem} />
            </div>
        </div>
    );
};

export default App;
