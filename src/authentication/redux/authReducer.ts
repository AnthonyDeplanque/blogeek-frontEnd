import AuthState from "../models/authState";
import { AuthActionType, GET_AUTH_SUCCESS, SET_NO_AUTH_SUCCESS, UPDATE_PROFILE_SUCCESS } from "./authActions";

const defaultState: AuthState | null = {
  data: null
};
export const authReducer = (state: AuthState = defaultState, action: AuthActionType): AuthState => {

  switch (action.type)
  {
    case GET_AUTH_SUCCESS:
      return {
        ...state,
        data: action.payload
      };
    case SET_NO_AUTH_SUCCESS:
      return {
        ...state,
        data: null
      }
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        data: action.payload
      }
    default:
      return state;
  }
}