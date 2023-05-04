import { createAction } from "@reduxjs/toolkit";

import { REQUEST, COURSE_ACTION } from "../constants";

export const getCourseProListAction = createAction(
  REQUEST(COURSE_ACTION.GET_COURSE_PRO_LIST)
);

export const getCourseFreeListAction = createAction(
  REQUEST(COURSE_ACTION.GET_COURSE_FREE_LIST)
)
