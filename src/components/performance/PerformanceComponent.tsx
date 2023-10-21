import { FormEvent, useCallback, useMemo, useRef, useState } from "react";

export default function PerformanceComponent() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [input, setInput] = useState("Default Value");
  const [count, setCount] = useState(1);

  function incrementCount() {
    setCount((previousCount) => previousCount + 1);
  }

  function decrementCount() {
    setCount((previousCount) => previousCount - 1);
  }

  function handleInput(event: FormEvent<HTMLInputElement>) {
    setInput(event.currentTarget.value);
  }

  // bad
  // const joinedInputWithCount = useMemo(() => {
  //   return input + " | " + count;
  // }, []);

  // good
  const joinedInputWithCount = useMemo(() => {
    return input + " | " + count;
  }, [input, count]);

  // bad
  // const handleSubmit = useCallback(() => {
  //   alert(`The input is "${input}" and the count is ${count}`);

  //   setInput("");
  //   setCount(1);
  // }, []);

  // good
  const handleSubmit = useCallback(() => {
    alert(`The input is "${input}" and the count is ${count}`);

    setInput("");
    setCount(1);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }, [input, count]);

  return (
    <>
      <h1>Performance Component</h1>

      <p>
        This component uses the <code>useMemo</code> and{" "}
        <code>useCallback</code> hook
      </p>

      <p>The joined input with count: {joinedInputWithCount}</p>

      <div className="flex">
        <button onClick={decrementCount}>-</button>
        <p>{count}</p>
        <button onClick={incrementCount}>+</button>
      </div>

      <input
        type="text"
        placeholder="Type to change the input"
        defaultValue={input}
        onInput={handleInput}
        ref={inputRef}
      />

      <div>
        <button onClick={handleSubmit}>Submit the count and the input</button>
      </div>
    </>
  );
}
