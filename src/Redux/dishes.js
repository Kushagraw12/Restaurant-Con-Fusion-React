import * as ActionTypes from "./ActionTypes";

export const Dishes = (
  state = {
    isLoading: true,
    errmess: null,
    dishes: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_DISHES:
      return {
        ...state,
        isLoading: false,
        errmess: null,
        dishes: action.payload,
      };

    case ActionTypes.DISHES_FAILED:
      return {
        ...state,
        isLoading: false,
        errmess: action.payload,
        dishes: [],
      };

    case ActionTypes.DISH_LOADING:
      return { ...state, isLoading: true, errmess: null, dishes: [] };

    default:
      return state;
  }
};
