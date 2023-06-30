import React from 'react';
import UseEffects from './useEffectCompo/useEffect';
import { useState } from 'react';

function App() {
    const [flag, setFlag] = useState(true);
    return (
        <div>
            <div>
                <button onClick={() => setFlag(!flag)}>Functional component with Toogle</button>
            </div>
            {flag ? <UseEffects />  : ""}
        </div>
    );
};

export default App;