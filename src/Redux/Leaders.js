import * as ActionTypes from "./ActionTypes";

export const Leaders = (
  state = {
    isLoading: true,
    errmess: null,
    leaders: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.LEADERS_FAILED:
      return {
        ...state,
        isLoading: false,
        errmess: action.payload,
        leaders: [],
      };

    case ActionTypes.LEADERS_LOADING:
      return { ...state, isLoading: true, errmess: null, leaders: [] };

    default:
      return state;
  }
};
