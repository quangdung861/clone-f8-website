import { createAction } from "@reduxjs/toolkit";
import { REQUEST, USER_ACTION } from "../constants";

export const registerAction = createAction(REQUEST(USER_ACTION.REGISTER));
export const loginAction = createAction(REQUEST(USER_ACTION.LOGIN));
export const getUserInfoAction = createAction(
  REQUEST(USER_ACTION.GET_USER_INFO)
);
export const updateCoverImageAction = createAction(
  REQUEST(USER_ACTION.UPDATE_COVER_IMAGE)
)
export const updateAvatarImageAction = createAction(
  REQUEST(USER_ACTION.UPDATE_AVATAR_IMAGE)
)
export const logoutAction = createAction(
  REQUEST(USER_ACTION.LOGOUT)
)