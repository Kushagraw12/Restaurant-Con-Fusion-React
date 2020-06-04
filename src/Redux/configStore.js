import { createStore, combineReducers } from "redux";
import { Dishes } from "../Redux/dishes";
import { Leaders } from "../Redux/Leaders";
import { Promotions } from "../Redux/promotions";
import { Comments } from "../Redux/comments";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: Dishes,
      comments: Comments,
      promotions: Promotions,
      leaders: Leaders,
    })
  );

  return store;
};
