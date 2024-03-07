import Chai from "./chai";
import { useState } from "react";

function App() {

  let [counter,setCounter] = useState(0)

  // let counter = 0;
  const addValue = () => {
    // counter = counter + 1;
    setCounter(counter+1);
  };
  const removeValue = () => {
    // counter = counter - 1;
    setCounter(counter-1);
  };
  return (
    <>
      <h1>Kidaa sohneoo ki chaiidaaaa</h1>
      <h1>Counter value: {counter}</h1>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>remove Value</button>
    </>
  );
}

export default App;
