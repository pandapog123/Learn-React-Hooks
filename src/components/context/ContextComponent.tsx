import { useContext, useReducer } from "react";
import {
  StateContext,
  StateContextReducerAction,
  StateData,
} from "./StateContext";

export default function ContextComponent() {
  let state = useContext(StateContext);

  if (!state) {
    return;
  }

  let { data, dispatch } = state;

  return (
    <div
      className={`context-component-container ${
        data.theme === "dark" ? "dark" : undefined
      }`}
    >
      <h1>Context Component</h1>

      <p>
        This Component uses the <code>useContext</code> hook
      </p>

      <pre>{JSON.stringify(data)}</pre>

      <div className="flex">
        <button onClick={() => dispatch({ type: "decrementCount" })}>-</button>
        <p>{data.count}</p>
        <button onClick={() => dispatch({ type: "incrementCount" })}>+</button>
      </div>

      <div>
        <p>The input is: {data.input}</p>
        <input
          type="text"
          onInput={(event) => {
            dispatch({ type: "input", data: event.currentTarget.value });
          }}
          defaultValue={data.input}
        />
      </div>

      <div>
        <label htmlFor="theme-toggle">Dark theme</label>

        <input
          type="checkbox"
          id="theme-toggle"
          defaultChecked={state.data.theme === "dark"}
          onChange={(event) => {
            dispatch({ type: "toggleTheme" });
          }}
        />
      </div>
    </div>
  );
}
