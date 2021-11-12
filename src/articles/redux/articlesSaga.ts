import { all, call, put, takeLatest } from "redux-saga/effects";
import { Articles } from '../../Blogeek-library/models/Articles';
import { deleteApi, fetchApi, postApi } from "../../utils/axiosApi"
import articlesActions, { deleteArticleAction, DELETE_ARTICLE, GET_ARTICLES, postArticleAction, POST_ARTICLE } from "./articlesActions"

export function* articlesSaga() {
  yield all([
    takeLatest(GET_ARTICLES, getArticlesFromDatabase),
    takeLatest(POST_ARTICLE, postArticleIntoDatabase),
    takeLatest(DELETE_ARTICLE, deleteArticleFromDatabase),
  ])
}

function* getArticlesFromDatabase() {
  try
  {
    let { data } = yield call(fetchApi, "articles");

    yield put(articlesActions.getArticlesSuccess(data));
  }
  catch (error)
  {
    console.log(error);
    yield put(articlesActions.getArticlesFailure());
  }
};

function* postArticleIntoDatabase(action: postArticleAction) {
  try
  {
    let { data } = yield call(postApi, 'articles', action.payload);
    console.log(data);
    yield put(articlesActions.postArticleSuccess(data.newArticle));
  }
  catch (error)
  {
    console.log(error);
    yield put(articlesActions.postArticleFailure());
  }
}

function* deleteArticleFromDatabase(action: deleteArticleAction) {
  try
  {
    let { data } = yield call(deleteApi, 'articles', action.payload);
    console.log(data);
    yield put(articlesActions.deleteArticleSuccess(action.payload));
    yield put(articlesActions.getArticles())
  }
  catch (error)
  {
    console.log(error);
    yield put(articlesActions.deleteArticleFailure());
  }
}