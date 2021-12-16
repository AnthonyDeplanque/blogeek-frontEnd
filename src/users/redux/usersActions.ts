import { ROLE } from '../../Blogeek-library/models/Role';
import { Users } from '../../Blogeek-library/models/Users';
export const GET_USERS = "GET_USERS";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILURE = "GET_USERS_FAILURE";
export const SET_USER_ROLE = "SET_USER_ROLE";
export const SET_USER_ROLE_SUCCESS = "SET_USER_ROLE_SUCCESS";
export const SET_USER_ROLE_FAILURE = "SET_USER_ROLE_FAILURE";
export const DELETE_USER_ROLE = "DELETE_USER_ROLE";
export const DELETE_USER_ROLE_SUCCESS = "DELETE_USER_ROLE_SUCCESS";
export const DELETE_USER_ROLE_FAILURE = "DELETE_USER_ROLE_FAILURE";
export interface getUsersAction {
  type: typeof GET_USERS;
}
export interface getUsersSuccessAction {
  type: typeof GET_USERS_SUCCESS;
  payload: Users[];
}
export interface getUsersFailureAction {
  type: typeof GET_USERS_FAILURE;
}
export interface setUserRoleAction {
  type: typeof SET_USER_ROLE;
  payload: {
    id: string,
    role: ROLE
  }
}
export interface setUserRoleSuccessAction {
  type: typeof SET_USER_ROLE_SUCCESS;
  payload: Users[];
}
export interface setUserRoleFailureAction {
  type: typeof SET_USER_ROLE_FAILURE;
}
export interface deleteUserRoleAction {
  type: typeof DELETE_USER_ROLE;
  payload: {
    id: string,
    role: ROLE
  }
}
export interface deleteUserRoleSuccessAction {
  type: typeof DELETE_USER_ROLE_SUCCESS;
  payload: Users[];
}
export interface deleteUserRoleFailureAction {
  type: typeof DELETE_USER_ROLE_FAILURE;
}

export type UsersActionsType =
  getUsersAction |
  getUsersSuccessAction |
  getUsersFailureAction |
  setUserRoleAction |
  setUserRoleSuccessAction |
  setUserRoleFailureAction |
  deleteUserRoleAction |
  deleteUserRoleSuccessAction |
  deleteUserRoleFailureAction;

export const usersActions = {
  getUsers: ((): getUsersAction => {
    return {
      type: GET_USERS
    }
  }),
  getUsersSuccess: ((users: Users[]): getUsersSuccessAction => {
    return {
      type: GET_USERS_SUCCESS,
      payload: users,
    }
  }),
  getUsersFailure: ((): getUsersFailureAction => {
    return {
      type: GET_USERS_FAILURE
    }
  }),
  setUserRole: ((idToRole: { id: string, role: ROLE }): setUserRoleAction => {
    return {
      type: SET_USER_ROLE,
      payload: idToRole
    }
  }),
  setUserRoleSuccess: ((users: Users[]): setUserRoleSuccessAction => {
    return {
      type: SET_USER_ROLE_SUCCESS,
      payload: users
    }
  }),
  setUserRoleFailure: ((): setUserRoleFailureAction => {
    return {
      type: SET_USER_ROLE_FAILURE
    }
  }),
  deleteUserRole: ((idToRole: { id: string, role: ROLE }): deleteUserRoleAction => {
    return {
      type: DELETE_USER_ROLE,
      payload: idToRole,
    }
  }),
  deleteUserRoleSuccess: ((users: Users[]): deleteUserRoleSuccessAction => {
    return {
      type: DELETE_USER_ROLE_SUCCESS,
      payload: users,
    }
  }),
  deleteUserRoleFailure: ((): deleteUserRoleFailureAction => {
    return {
      type: DELETE_USER_ROLE_FAILURE
    }
  }),
}

export default usersActions;