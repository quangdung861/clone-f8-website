import { createAction } from "@reduxjs/toolkit";
import { REQUEST, USER_ACTION } from "../constants";

export const registerAction = createAction(REQUEST(USER_ACTION.REGISTER));
export const loginAction = createAction(REQUEST(USER_ACTION.LOGIN));
export const getUserInfoAction = createAction(
  REQUEST(USER_ACTION.GET_USER_INFO)
);
