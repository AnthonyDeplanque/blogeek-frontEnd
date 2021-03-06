import { all, takeLatest, call, put } from "@redux-saga/core/effects"
import { deleteApi, fetchApi, postApi } from "../../utils/axiosApi"
import usersActions, { DELETE_USER_ROLE, GET_USERS, setUserRoleAction, SET_USER_ROLE } from "./usersActions"
import { ROLE_FOR_USER_API_ROUTE, USERS_ROUTE } from "../../Blogeek-library/config/apiRoutes"
import loadingActions from "../../loading/redux/LoadingActions"

export function* usersSaga() {
  yield all([
    takeLatest(GET_USERS, getUserFromDatabase),
    takeLatest(SET_USER_ROLE, setUserRole),
    takeLatest(DELETE_USER_ROLE, deleteUserRole),
  ])
};

function* getUserFromDatabase() {
  yield put(loadingActions.loading());
  try {
    const { data } = yield call(fetchApi, USERS_ROUTE);
    yield put(usersActions.getUsersSuccess(data));
  }
  catch (error) {
    console.log(error);
    yield put(usersActions.getUsersFailure());
  }
  yield put(loadingActions.loaded());
}

function* setUserRole(action: setUserRoleAction) {
  const { id } = action.payload;
  yield put(loadingActions.loading());
  try {
    const { data } = yield call(postApi, `${USERS_ROUTE}${ROLE_FOR_USER_API_ROUTE}/${id}`, action.payload);
    if (data) { getUserFromDatabase() };
  } catch (error) {
    console.log(error)
    yield put(usersActions.setUserRoleFailure())
  }
  yield put(loadingActions.loaded());
}
function* deleteUserRole(action: setUserRoleAction) {
  const { id } = action.payload;
  yield put(loadingActions.loading());
  try {
    const { data } = yield call(deleteApi, `${USERS_ROUTE}${ROLE_FOR_USER_API_ROUTE}`, id, action.payload);
    if (data) { getUserFromDatabase() };
  } catch (error) {
    console.log(error);
    yield put(usersActions.setUserRoleFailure());
  }
  yield put(loadingActions.loaded());
}