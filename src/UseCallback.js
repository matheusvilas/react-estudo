import "./App.css";
import { useEffect, useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(1);
  const [random, setRandom] = useState(1);

  // const counterDouble = count * 2;
  const counterDouble = useMemo(() => count * 2, [count]);

  // const counterRand = count * Math.random();
  const counterRand = useMemo(() => count * Math.random(), [count]);

  return (
    <div className="App">
      <h1>UseMemo</h1>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        +
      </button>

      <p>count: {count}</p>
      <p>countDouble: {counterDouble}</p>
      <p>countRand: {counterRand}</p>
      <button
        onClick={() => {
          setRandom(() => Math.random());
        }}
      >
        random
      </button>
      <p>random: {random}</p>
    </div>
  );
}

export default App;
