import { Dispatch, createContext } from "react";

export type StateContextReducerAction =
  | { type: "incrementCount" }
  | { type: "decrementCount" }
  | { type: "toggleTheme" }
  | { type: "input"; data: string };

export type Theme = "light" | "dark";

export interface StateData {
  count: number;
  input: string;
  theme: Theme;
}

export interface StateContextData {
  data: StateData;
  dispatch: Dispatch<StateContextReducerAction>;
}

export const StateContext = createContext<StateContextData | null>(null);
