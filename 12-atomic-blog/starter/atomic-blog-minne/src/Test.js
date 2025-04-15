import { useState } from "react";

function SlowComponent() {
  // If this is too slow on your maching, reduce the `length`
  const words = Array.from({ length: 1099 }, () => "WORD");
  return (
    <ul>
      {words.map((word, i) => (
        <li key={i}>
          {i}: {word}
        </li>
      ))}
    </ul>
  );
}

function Counter({ children }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Increase: {count}</button>
      {children}
    </div>
  );
}

export default function Test() {
  return (
    <>
      <h1>Slow counter?!?</h1>
      <Counter>
        {/* 
    Creation Before Rendering: The SlowComponent is first "created" 
    as a JSX element and passed to Counter as children. 
    When React renders
     the Counter component, it already has
      a reference to the SlowComponent 
      that was created earlier.
    */}

        <SlowComponent />
      </Counter>
    </>
  );
}
