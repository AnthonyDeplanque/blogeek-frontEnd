import UsersState from "../models/usersState";
import { DELETE_USER_ROLE_SUCCESS, GET_USERS_SUCCESS, SET_USER_ROLE_SUCCESS, UsersActionsType } from "./usersActions";

const defaultState: UsersState | null = {
  data: null
}
export const usersReducer = (state: UsersState = defaultState, action: UsersActionsType): UsersState => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        data: action.payload
      };

    case SET_USER_ROLE_SUCCESS:
      return {
        ...state,
        data: action.payload
      };

    case DELETE_USER_ROLE_SUCCESS:
      return {
        ...state,
        data: action.payload
      }
    default:
      return state;
  }

}