import React, { useState } from 'react';
import './styles.css';

function Counter() {
    const [count, setCount] = useState(0);

        console.log("Counter rendered");
    return (
        <div className="counter">
            <p>Count: {count}</p>



            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>

            <button onClick={() => setCount(count - 1)}>
                Decrement
            </button>
        </div>
    );
}

function Day03() {
    return (
        <div className="day03">
            <h1>Day 03</h1>
            <Counter />
        </div>
    );
}

export default Day03;