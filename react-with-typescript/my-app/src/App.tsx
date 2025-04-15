import { useState } from "react";
import "./App.css";
import InputField from "./combonents/InputField";

function App() {
  const [todo, setTodo] = useState<string>("");
  let name: string;
  let age: number;
  // let employer: boolean;

  name = "kadar";
  age = 20;
  // employer = true;

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          {name} {age} years-old from somaliland
        </h1>
        <InputField todo={todo} setTodo={setTodo} />
      </header>
    </div>
  );
}

export default App;
