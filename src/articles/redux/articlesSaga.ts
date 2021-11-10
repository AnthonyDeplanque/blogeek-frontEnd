import { all, call, put, takeLatest } from "redux-saga/effects";
import { Articles } from '../../Blogeek-library/models/Articles';
import { fetchApi, postApi } from "../../utils/axiosApi"
import articlesActions, { GET_ARTICLES, postArticleAction, POST_ARTICLE } from "./articlesActions"

export function* articlesSaga() {
  yield all([
    takeLatest(GET_ARTICLES, getArticlesFromDatabase),
    takeLatest(POST_ARTICLE, postArticleIntoDatabase),
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
