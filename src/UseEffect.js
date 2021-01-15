import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState(false);

  useEffect(() => {
    console.log("App a");
  }, []);

  useEffect(() => {
    console.log("App b");
  }, [state]);

  return (
    <div className="App">
      <h1>UseEffect</h1>
      <button
        onClick={() => {
          setState(!state);
        }}
      >
        teste
      </button>

      {state && <SmallComponent />}
    </div>
  );
}

function SmallComponent() {
  useEffect(() => {
    console.log("smallcomponent a");

    return () => {
      console.log("small component b");
    };
  }, []);

  return (
    <div>
      <h2>SmallComponent</h2>
      <button onClick={() => {}}>SmallComponent</button>
    </div>
  );
}

export default App;
