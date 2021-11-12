import { Articles } from '../../Blogeek-library/models/Articles';

export const GET_ARTICLES = "GET_ARTICLES";
export const GET_ARTICLES_SUCCESS = 'GET_ARTICLES_SUCCESS';
export const GET_ARTICLES_FAILURE = 'GET_ARTICLES_FAILURE';
export const POST_ARTICLE = "POST_ARTICLE";
export const POST_ARTICLE_SUCCESS = "POST_ARTICLE_SUCCESS";
export const POST_ARTICLE_FAILURE = "POST_ARTICLE_FAILURE";
export const DELETE_ARTICLE = "DELETE_ARTICLE";
export const DELETE_ARTICLE_SUCCESS = "DELETE_ARTICLE_SUCCESS";
export const DELETE_ARTICLE_FAILURE = "DELETE_ARTICLE_FAILURE";

export interface getArticlesAction {
  type: typeof GET_ARTICLES;
}
export interface getArticlesSuccessAction {
  type: typeof GET_ARTICLES_SUCCESS;
  payload: Articles[];
}

export interface getArticlesFailureAction {
  type: typeof GET_ARTICLES_FAILURE;
}

export interface postArticleAction {
  type: typeof POST_ARTICLE;
  payload: { id_user: string, title: string, subtitle: string, content: string };
}

export interface postArticleSuccessAction {
  type: typeof POST_ARTICLE_SUCCESS;
  payload: Articles
}
export interface postArticleFailureAction {
  type: typeof POST_ARTICLE_FAILURE;
}

export interface deleteArticleAction {
  type: typeof DELETE_ARTICLE;
  payload: string;
}
export interface deleteArticleSuccessAction {
  type: typeof DELETE_ARTICLE_SUCCESS;
  payload: string;
}
export interface deleteArticleFailureAction {
  type: typeof DELETE_ARTICLE_FAILURE;
}
export type ArticlesActionsType =
  getArticlesAction |
  getArticlesSuccessAction |
  getArticlesFailureAction |
  postArticleAction |
  postArticleSuccessAction |
  postArticleFailureAction |
  deleteArticleAction |
  deleteArticleSuccessAction |
  deleteArticleFailureAction;

export const articlesActions = {
  getArticles: ((): getArticlesAction => {
    return {
      type: GET_ARTICLES
    }
  }),
  getArticlesSuccess: ((articles: Articles[] | any): getArticlesSuccessAction => {
    return {
      type: GET_ARTICLES_SUCCESS,
      payload: articles,
    }
  }),
  getArticlesFailure: ((): getArticlesFailureAction => {
    return {
      type: GET_ARTICLES_FAILURE
    }
  }),
  postArticle: ((article: any): postArticleAction => {
    return {
      type: POST_ARTICLE,
      payload: article
    }
  }),
  postArticleSuccess: ((article: Articles): postArticleSuccessAction => {
    return {
      type: POST_ARTICLE_SUCCESS,
      payload: article
    }
  }),
  postArticleFailure: ((): postArticleFailureAction => {
    return {
      type: POST_ARTICLE_FAILURE
    }
  }),
  deleteArticle: ((id: string): deleteArticleAction => {
    return {
      type: DELETE_ARTICLE,
      payload: id,
    }
  }),
  deleteArticleSuccess: ((id: string): deleteArticleSuccessAction => {
    return {
      type: DELETE_ARTICLE_SUCCESS,
      payload: id
    }
  }),
  deleteArticleFailure: ((): deleteArticleFailureAction => {
    return {
      type: DELETE_ARTICLE_FAILURE
    }
  })
};

export default articlesActions;