
import ArticlesState from "../models/articleState";
import { ArticlesActionsType, DELETE_ARTICLE_SUCCESS, GET_ARTICLES_SUCCESS, POST_ARTICLE_SUCCESS, } from "./articlesActions";

const defaultState: ArticlesState | null = {
  data: undefined
}

export const articlesReducer = (state: ArticlesState = defaultState, action: ArticlesActionsType): ArticlesState => {
  switch (action.type) {
    case GET_ARTICLES_SUCCESS:
      return {
        ...state,
        data: action.payload
      };
    case POST_ARTICLE_SUCCESS:
      return { ...state, data: [...state.data, action.payload] };
    case DELETE_ARTICLE_SUCCESS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}
