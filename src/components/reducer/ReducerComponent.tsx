import { useReducer } from "react";

interface ReducerComponentState {
  count: number;
  input: string;
}

type StateReducerAction =
  | { type: "incrementCount" }
  | { type: "decrementCount" }
  | { type: "input"; data: string };

function stateReducer(
  state: ReducerComponentState,
  action: StateReducerAction
): ReducerComponentState {
  switch (action.type) {
    case "incrementCount":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrementCount":
      return {
        ...state,
        count: state.count - 1,
      };
    case "input":
      return {
        ...state,
        input: action.data,
      };
  }
}

export default function ReducerComponent() {
  const [state, dispatch] = useReducer(stateReducer, {
    count: 0,
    input: "Default Value",
  });

  return (
    <>
      <h1>Reducer Component</h1>

      <p>
        This Component uses the <code>useReducer</code> hook
      </p>

      <pre>{JSON.stringify(state)}</pre>

      <div className="flex">
        <button
          onClick={() => {
            dispatch({
              type: "decrementCount",
            });
          }}
        >
          -
        </button>
        <p>{state.count}</p>
        <button
          onClick={() => {
            dispatch({
              type: "incrementCount",
            });
          }}
        >
          +
        </button>
      </div>

      <div>
        <p>The input is: {state.input}</p>

        <input
          type="text"
          defaultValue={state.input}
          onInput={(event) => {
            dispatch({
              type: "input",
              data: event.currentTarget.value,
            });
          }}
        />
      </div>
    </>
  );
}
