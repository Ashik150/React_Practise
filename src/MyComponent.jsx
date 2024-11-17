import React, { useState, useEffect } from 'react';

function MyComponent() {
    //const [name,setName] = useState("Don");
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]
    );

    function addCount() {
        setCount(c => c + 1);
    }

    function subCount() {
        setCount(c => c - 1);
    }

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={addCount}>Add</button>
            <button onClick={subCount}>Subtract</button>
        </>
    );
}

export default MyComponent;