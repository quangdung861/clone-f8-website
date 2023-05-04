import { createAction } from "@reduxjs/toolkit";
import { REQUEST, VIDEO_ACTION } from "../constants";

export const getVideoListAction = createAction(
  REQUEST(VIDEO_ACTION.GET_VIDEO_LIST)
);
