import "./App.css";
import React, { useEffect, useState, createContext, useContext } from "react";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

const user = {
  name: "Matheus Vilas Boas",
  token: "A1B2C3D4-E5F6G7",
};

const ThemeContext = createContext(themes.light);
const UserContext = createContext();

function App() {
  const [stateUser, setStateUser] = useState(user);

  return (
    <UserContext.Provider value={{ ...stateUser, setStateUser }}>
      <ThemeContext.Provider value={themes.light}>
        <Toolbar />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

function Toolbar() {
  const { token } = useContext(UserContext);

  return (
    <div>
      <h2>{token}</h2>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  const { name, token, setStateUser } = useContext(UserContext);

  return (
    <div>
      <span>{name}</span>
      <span>{token}</span>
      <button
        onClick={() => {
          setStateUser({
            name,
            token: Math.random(),
          });
        }}
        style={{ background: theme.background, color: theme.foreground }}
      >
        I am styled by theme context!
      </button>
    </div>
  );
}

export default App;
