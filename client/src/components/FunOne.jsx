import React from 'react';

export default function FunOne() {

    function handleClick() {
        alert("hello");
    }

    function handleClick2() {
        alert("hello2");
    }

    return (
        <main>
            <section> 
                <h1>Fun One</h1>
                <button onClick={handleClick}>Click Me</button> 
            </section>
            <section>
                <h1>Fun Two</h1>
                <button onClick={handleClick2}>Click Me2</button>
            </section>
        </main>
    );
}


