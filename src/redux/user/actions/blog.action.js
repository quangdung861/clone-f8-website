import { createAction } from "@reduxjs/toolkit";
import { REQUEST, BLOG_ACTION } from "../constants";

export const getBlogListAction = createAction(
  REQUEST(BLOG_ACTION.GET_BLOG_LIST_ACTION)
);
