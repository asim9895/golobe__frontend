export enum ActionTypes {
  SAVE_USER = "SAVE_USER",
  AUTHENTICATE_USER = "AUTHENTICATE_USER",
  LOGOUT_USER = "LOGOUT_USER",
}

interface saveUserActionType {
  type: ActionTypes.SAVE_USER;
  payload: { user_info: any; token: string };
}

interface authenticateUserActionType {
  type: ActionTypes.AUTHENTICATE_USER;
  payload: { authenticated: boolean };
}

interface logoutUserActionType {
  type: ActionTypes.LOGOUT_USER;
  payload: { user_info: any; token: string; authenticated: boolean };
}
export type Action =
  | saveUserActionType
  | authenticateUserActionType
  | logoutUserActionType;
