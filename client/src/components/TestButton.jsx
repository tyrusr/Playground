import React from 'react';

export default function TestButton() {
    function handleClick() {
        alert("hello");
        console.log("button pressed");
    }

    return (
        <button onClick={handleClick}>Click Me</button>
    )
}