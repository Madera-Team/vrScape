import { CONTEXT_TYPES } from "./RankingProvider";

export const rankingReducer = (state, action) => {
  switch (action.type) {
    case CONTEXT_TYPES.GET_RANKING:
      return {
        ...state,
        ranking: action.payload,
      };

    default:
      return state;
  }
};
