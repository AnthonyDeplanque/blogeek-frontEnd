import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import { AUTHENTICATION_ROUTE, USERS_ROUTE } from "../../Blogeek-library/config/apiRoutes";
import loadingActions from "../../loading/redux/LoadingActions";
import { fetchApi, postApi, putApi } from "../../utils/axiosApi";
import authActions, { createProfileAction, CREATE_PROFILE, getAuthAction, GET_AUTH, GET_AUTH_BY_TOKEN, setNoAuthAction, SET_NO_AUTH, updateProfileAction, UPDATE_PROFILE } from "./authActions";

export function* authSaga() {
  yield all([
    takeLatest(GET_AUTH, getAuthentication),
    takeLatest(SET_NO_AUTH, logOffAuthentication),
    takeLatest(GET_AUTH_BY_TOKEN, getAuthenticationByToken),
    takeLatest(UPDATE_PROFILE, updateProfile),
    takeLatest(CREATE_PROFILE, createUser),
  ]);
}

function* getAuthenticationByToken() {
  yield put(loadingActions.loading());
  try {
    const token: string = yield window.localStorage.getItem('tokenBGA');
    const { data } = yield call(postApi, 'users/token', { token: token });
    yield put(authActions.getAuthSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(authActions.getAuthFailure());
  }
  yield put(loadingActions.loaded());
}
function* getAuthentication(action: getAuthAction) {
  yield put(loadingActions.loading());
  try {
    const { data } = yield call(postApi, (USERS_ROUTE + AUTHENTICATION_ROUTE), action.payload);
    yield window.localStorage.setItem('tokenBGA', data.token);
    yield put(authActions.getAuthSuccess(data));
  }
  catch (error) {
    console.log(error);
    yield put(authActions.getAuthFailure());
  }
  yield put(loadingActions.loaded());
}

function* logOffAuthentication(action: setNoAuthAction) {
  yield put(loadingActions.loading());
  try {
    yield put(authActions.setNoAuthSuccess(null));
    yield window.localStorage.removeItem('tokenBGA');
  }
  catch (error) {
    console.log(error);
    yield put(authActions.setNoAuthFailure());
  }
  yield put(loadingActions.loaded());
}

function* updateProfile(action: updateProfileAction) {
  const { id, first_name, last_name, biography, avatar } = action.payload;
  const updatedData = { first_name, last_name, biography, avatar };
  yield put(loadingActions.loading());

  try {
    yield call(putApi, USERS_ROUTE, id, updatedData);

    const { data } = yield call(fetchApi, `${USERS_ROUTE}/${id}`);
    console.log(data);
    yield put(authActions.updateProfileSuccess(data));
  }
  catch (error) {
    console.log(error);
    yield put(authActions.updateProfileFailure());
  }
  yield put(loadingActions.loaded());
}


function* createUser(action: createProfileAction) {
  yield put(loadingActions.loading());
  try {
    const { data } = yield call(postApi, USERS_ROUTE, action.payload);
    console.log(data);
    yield put(authActions.createProfileSuccess(data));
  }
  catch (error) {
    console.log(error);
    yield put(authActions.createProfileFailure(error))
  }
  yield put(loadingActions.loaded());
}


