import { PropsWithChildren, useReducer } from "react";
import {
  StateContext,
  StateContextReducerAction,
  StateData,
} from "./StateContext";

function stateReducer(
  state: StateData,
  action: StateContextReducerAction
): StateData {
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
    case "toggleTheme":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    case "input":
      return {
        ...state,
        input: action.data,
      };
  }
}

export default function StateContextProvider({ children }: PropsWithChildren) {
  const [data, dispatch] = useReducer(stateReducer, {
    count: 0,
    theme: "light",
    input: "Default Value",
  });

  return (
    <StateContext.Provider value={{ data, dispatch }}>
      {children}
    </StateContext.Provider>
  );
}
