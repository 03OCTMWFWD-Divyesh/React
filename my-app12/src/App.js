import React from 'react';
import useEffect from './useEffectCompo';
import { useState } from 'react';

function App() {
    const [flag, setFlag] = useState(true);
    return (
        <div>
            <div>
                <button onClick={() => setFlag(!flag)}>Functional component with Toogle</button>
            </div>
            {flag ? <useEffect />  : ""}
        </div>
    );
};

export default App;