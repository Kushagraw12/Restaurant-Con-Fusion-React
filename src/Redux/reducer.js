import { DISHES } from "../Shared/dishes";
import { COMMENTS } from "../Shared/comments";
import { LEADERS } from "../Shared/Leaders";
import { PROMOTIONS } from "../Shared/Promotion";

export const initialState = {
  dishes: DISHES,
  comments: COMMENTS,
  leaders: LEADERS,
  promotions: PROMOTIONS,
};

export const Reducer = (state = initialState, action) => {
  return state;
};
