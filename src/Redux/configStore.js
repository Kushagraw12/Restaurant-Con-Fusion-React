import { createStore, combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { createForms } from "react-redux-form";
import thunk from "redux-thunk";
import { Dishes } from "../Redux/dishes";
import { Leaders } from "../Redux/Leaders";
import { Promotions } from "../Redux/promotions";
import { Comments } from "../Redux/comments";
import logger from "redux-logger";
import { InitialFeedback } from "./forms";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: Dishes,
      comments: Comments,
      promotions: Promotions,
      leaders: Leaders,
      ...createForms({
        feedback: InitialFeedback,
      }),
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
