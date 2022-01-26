import React from 'react';
import { useSelector } from 'react-redux';

const Greeting = () => {
    const greet = 'Hello!';
    const {greetings} = useSelector(store=>store.greetings)
    console.log(greetings);
    
    return (<div> 
        <h1>Greetings from all over the world</h1>
        <p> {greet}</p>
    </div>)
}

export default Greeting;