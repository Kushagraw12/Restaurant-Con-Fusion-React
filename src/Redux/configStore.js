import { createStore } from "redux";
import { Reducer, initialState } from "../Redux/reducer";

export const ConfigureStore = () => {
  const store = createStore(Reducer, initialState);

  return store;
};
