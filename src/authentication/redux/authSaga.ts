import { all, call, put, takeLatest } from "@redux-saga/core/effects";
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
  try 
  {
    const token: string = yield window.localStorage.getItem('tokenBGA');
    const { data } = yield call(postApi, 'users/token', { token: token });
    yield put(authActions.getAuthSuccess(data));
  } catch (error)
  {
    console.log(error);
    yield put(authActions.getAuthFailure());
  }
}
function* getAuthentication(action: getAuthAction) {
  try
  {
    const { data } = yield call(postApi, 'users/auth', action.payload);
    yield window.localStorage.setItem('tokenBGA', data.token);
    yield put(authActions.getAuthSuccess(data));
  }
  catch (error)
  {
    console.log(error);
    yield put(authActions.getAuthFailure());
  }
}

function* logOffAuthentication(action: setNoAuthAction) {
  try 
  {
    yield put(authActions.setNoAuthSuccess(null));
    yield window.localStorage.removeItem('tokenBGA');
  }
  catch (error)
  {
    console.log(error);
    yield put(authActions.setNoAuthFailure());
  }
}

function* updateProfile(action: updateProfileAction) {
  try
  {
    const { id, first_name, last_name, biography, avatar } = action.payload;
    yield call(putApi, 'users', id, { first_name: first_name, last_name: last_name, biography: biography, avatar: avatar });

    const { data } = yield call(fetchApi, `users/${id}`);
    console.log(data);
    yield put(authActions.updateProfileSuccess(data));
  }
  catch (error)
  {
    console.log(error);
    yield put(authActions.updateProfileFailure());
  }
}
function* createUser(action: createProfileAction) {
  try
  {
    const { data } = yield call(postApi, 'users', action.payload);
    console.log(data);
    yield put(authActions.createProfileSuccess(data));
  }
  catch (error)
  {
    console.log(error);
    yield put(authActions.createProfileFailure(error))
  }
}


