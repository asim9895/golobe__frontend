import { Action, ActionTypes } from "../types/userTypes";

export interface UserInitiationStateTypes {
  user_info: any;
  token: string | null;
  authenticated: boolean;
}

const initialState: UserInitiationStateTypes = {
  user_info: null,
  token: null,
  authenticated: false,
};

export const userReducer = (
  state: UserInitiationStateTypes = initialState,
  actions: Action
): UserInitiationStateTypes => {
  switch (actions.type) {
    case ActionTypes.SAVE_USER:
      return {
        ...state,
        user_info: actions.payload.user_info,
        token: actions.payload.token,
      };
    case ActionTypes.AUTHENTICATE_USER:
      return {
        ...state,
        authenticated: actions.payload.authenticated,
      };
    case ActionTypes.LOGOUT_USER:
      return {
        ...state,
        token: null,
        user_info: null,
        authenticated: false,
      };
    default:
      return state;
  }
};
