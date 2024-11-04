import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import Apifetch from "./Apifetch";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Apifetch />
    </div>
  );
}

export default App;
