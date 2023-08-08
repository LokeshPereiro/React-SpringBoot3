import { useState } from "react";

export const ContadorApp = () => {
  const [counter, setCounter] = useState(0);
  const incrementar = () => {
    setCounter(counter + 1);
  };
  const reducir = () => {
    setCounter(counter - 1);
  };
  const resetear = () => {
    setCounter(0);
  };
  return (
    <>
      <h1>Counter App {counter}</h1>
      <button onClick={incrementar}>+1</button>
      <button onClick={resetear}>reset</button>
      <button onClick={reducir}>-1</button>
    </>
  );
};
