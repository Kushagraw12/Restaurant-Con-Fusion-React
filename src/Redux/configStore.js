import { createStore, combineReducers } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Dishes } from "../Redux/dishes";
import { Leaders } from "../Redux/Leaders";
import { Promotions } from "../Redux/promotions";
import { Comments } from "../Redux/comments";
import logger from "redux-logger";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: Dishes,
      comments: Comments,
      promotions: Promotions,
      leaders: Leaders,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
