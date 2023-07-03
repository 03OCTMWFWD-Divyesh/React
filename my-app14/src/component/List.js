import React from 'react';
import { useEffect, useState } from 'react';

function List({ getItems }) {
    const [item, setItem] = useState([]);

    useEffect(() => {
        setItem(getItems(5));
        console.log("Updating items");
    }, [getItems]);
    return item.map(item => <div key={item}>{item}</div>);

};
export default List;