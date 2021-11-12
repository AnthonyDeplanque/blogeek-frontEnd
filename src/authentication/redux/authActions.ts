import { Users } from '../../Blogeek-library/models/Users';

export const GET_AUTH = "GET_AUTH";
export const GET_AUTH_SUCCESS = "GET_AUTH_SUCCESS";
export const GET_AUTH_FAILURE = "GET_AUTH_FAILURE";
export const GET_AUTH_BY_TOKEN = "GET_AUTH_BY_TOKEN";
export const SET_NO_AUTH = "SET_NO_AUTH";
export const SET_NO_AUTH_SUCCESS = "SET_NO_AUTH_SUCCESS";
export const SET_NO_AUTH_FAILURE = "SET_NO_AUTH_FAILURE";
export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS";
export const UPDATE_PROFILE_FAILURE = "UPDATE_PROFILE_FAILURE";
export const CREATE_PROFILE = "CREATE_PROFILE";
export const CREATE_PROFILE_SUCCESS = "CREATE_PROFILE_SUCCESS";
export const CREATE_PROFILE_FAILURE = "CREATE_PROFILE_FAILURE";

export interface getAuthAction {
  type: typeof GET_AUTH
  payload: { nick_name: string, password: string }
};

export interface getAuthSuccessAction {
  type: typeof GET_AUTH_SUCCESS,
  payload: Users
};

export interface getAuthFailureAction {
  type: typeof GET_AUTH_FAILURE,
};

export interface setNoAuthAction {
  type: typeof SET_NO_AUTH,
};
export interface setNoAuthSuccessAction {
  type: typeof SET_NO_AUTH_SUCCESS,
  payload: null;
};
export interface setNoAuthFailureAction {
  type: typeof SET_NO_AUTH_FAILURE,
};

export interface getAuthByTokenAction {
  type: typeof GET_AUTH_BY_TOKEN,
}

export interface updateProfileAction {
  type: typeof UPDATE_PROFILE
  payload: {
    id: string,
    first_name?: string,
    last_name?: string,
    avatar?: string,
    biography?: string,
  }
}
export interface updateProfileSuccessAction {
  type: typeof UPDATE_PROFILE_SUCCESS
  payload: Users
}
export interface updateProfileFailureAction {
  type: typeof UPDATE_PROFILE_FAILURE
}

export interface createProfileAction {
  type: typeof CREATE_PROFILE
  payload: { nick_name: string, email: string, password: string }
}
export interface createProfileSuccessAction {
  type: typeof CREATE_PROFILE_SUCCESS
  payload: Users
}
export interface createProfileFailureAction {
  type: typeof CREATE_PROFILE_FAILURE
  payload: any
}

export type AuthActionType =
  getAuthAction |
  getAuthSuccessAction |
  getAuthFailureAction |
  getAuthByTokenAction |
  setNoAuthAction |
  setNoAuthSuccessAction |
  setNoAuthFailureAction |
  updateProfileAction |
  updateProfileSuccessAction |
  updateProfileFailureAction |
  createProfileAction |
  createProfileSuccessAction |
  createProfileFailureAction;

export const authActions = {
  getAuth: ((credentials: any): getAuthAction => {
    return {
      type: GET_AUTH,
      payload: credentials
    }
  }),
  getAuthSuccess: ((user: Users): getAuthSuccessAction => {
    return {
      type: GET_AUTH_SUCCESS,
      payload: user
    }
  }),
  getAuthFailure: ((): getAuthFailureAction => {
    return {
      type: GET_AUTH_FAILURE
    }
  }),
  getAuthByToken: ((): getAuthByTokenAction => {
    return {
      type: GET_AUTH_BY_TOKEN
    }
  }),

  setNoAuth: ((): setNoAuthAction => {
    return {
      type: SET_NO_AUTH
    }
  }),
  setNoAuthSuccess: ((user: null): setNoAuthSuccessAction => {
    return {
      type: SET_NO_AUTH_SUCCESS,
      payload: user
    }
  }),
  setNoAuthFailure: ((): setNoAuthFailureAction => {
    return {
      type: SET_NO_AUTH_FAILURE
    }
  }),
  updateProfile: ((user: {
    id: string,
    first_name?: string,
    last_name?: string,
    avatar?: string,
    biography?: string,
  }): updateProfileAction => {
    return {
      type: UPDATE_PROFILE,
      payload: user
    }
  }),
  updateProfileSuccess: ((user: Users): updateProfileSuccessAction => {
    return {
      type: UPDATE_PROFILE_SUCCESS,
      payload: user
    }
  }),
  updateProfileFailure: ((): updateProfileFailureAction => {
    return {
      type: UPDATE_PROFILE_FAILURE
    }
  }),
  createProfile: ((credentials: { nick_name: string, email: string, password: string }): createProfileAction => {
    return {
      type: CREATE_PROFILE,
      payload: credentials
    }
  }),
  createProfileSuccess: ((user: Users): createProfileSuccessAction => {
    return {
      type: CREATE_PROFILE_SUCCESS,
      payload: user
    }
  }),
  createProfileFailure: ((error: any): createProfileFailureAction => {
    return {
      type: CREATE_PROFILE_FAILURE,
      payload: error
    }
  })
};

export default authActions;