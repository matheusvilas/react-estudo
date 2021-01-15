import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  return (
    <div className="App">
      <h1>UseState</h1>
      <span>{count}</span>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
}

export default App;
