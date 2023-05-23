import { useState } from "react";
import InitialEntries from "./components/IntialEntries";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="mainDiv">
      <h1>Your portfolio over time</h1>
      <InitialEntries />
    </div>
  );
}

export default App;
