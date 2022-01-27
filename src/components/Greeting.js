import React from 'react';
import { useSelector } from 'react-redux';

const Greeting = () => {
  const { list } = useSelector((store) => store.greetings);

  let greet = 'Loading';
  if (list) { greet = list[Math.floor(Math.random() * list.length)].message; }

  return (
    <div>
      <h1>Greetings from all over the world</h1>
      <p>
        {' '}
        {greet}
      </p>
    </div>
  );
};

export default Greeting;
