import { createAction } from "@reduxjs/toolkit";
import { REQUEST, SEARCH_ACTION } from "../constants";

export const getSearchListAction = createAction(
  REQUEST(SEARCH_ACTION.GET_SEARCH_LIST)
);
