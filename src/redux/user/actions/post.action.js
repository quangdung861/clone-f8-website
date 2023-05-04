import { createAction } from "@reduxjs/toolkit";
import { REQUEST, POST_ACTION } from "../constants";

export const getPostListAction = createAction(
  REQUEST(POST_ACTION.GET_POST_LIST)
);
