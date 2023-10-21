import { FormEvent, useState } from "react";

export default function StateComponent() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("Default Value");

  function incrementCount() {
    setCount((previousCount) => previousCount + 1);
  }

  function decrementCount() {
    setCount((previousCount) => previousCount - 1);
  }

  function handleInput(event: FormEvent<HTMLInputElement>) {
    setInput(event.currentTarget.value);
  }

  return (
    <>
      <h1>State Component</h1>

      <p>
        This Component uses the <code>useState</code> hook
      </p>

      <div className="flex">
        <button onClick={decrementCount}>-</button>
        <p>{count}</p>
        <button onClick={incrementCount}>+</button>
      </div>

      <div>
        <div>The input is: {input}</div>

        <input type="text" onInput={handleInput} defaultValue={input} />
      </div>
    </>
  );
}
