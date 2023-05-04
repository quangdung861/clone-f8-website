import { createReducer } from "@reduxjs/toolkit";

import { REQUEST, SUCCESS, FAIL, COURSE_ACTION } from "../constants";

const initialState = {
  courseProList: {
    data: [],
    loading: false,
    error: null,
  },
  courseFreeList: {
    data: [],
    loading: false,
    error: null,
  },
};

const courseReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(REQUEST(COURSE_ACTION.GET_COURSE_PRO_LIST), (state, action) => {
      return {
        ...state,
        courseProList: {
          ...state.courseProList,
          loading: true,
        },
      };
    })
    .addCase(SUCCESS(COURSE_ACTION.GET_COURSE_PRO_LIST), (state, action) => {
      const { data } = action.payload;
      return {
        ...state,
        courseProList: {
          ...state.courseProList,
          loading: false,
          data,
        },
      };
    })
    .addCase(FAIL(COURSE_ACTION.GET_COURSE_PRO_LIST), (state, action) => {
      const { error } = action.payload;
      return {
        ...state,
        courseProList: {
          ...state.courseProList,
          loading: false,
          error,
        },
      };
    })
    ///
    .addCase(REQUEST(COURSE_ACTION.GET_COURSE_FREE_LIST), (state, action) => {
      return {
        ...state,
        courseFreeList: {
          ...state.courseFreeList,
          loading: true,
        },
      };
    })
    .addCase(SUCCESS(COURSE_ACTION.GET_COURSE_FREE_LIST), (state, action) => {
      const { data } = action.payload;
      return {
        ...state,
        courseFreeList: {
          ...state.courseFreeList,
          loading: false,
          data,
        },
      };
    })
    .addCase(FAIL(COURSE_ACTION.GET_COURSE_FREE_LIST), (state, action) => {
      const { error } = action.payload;
      return {
        ...state,
        courseFreeList: {
          ...state.courseFreeList,
          loading: false,
          error,
        },
      };
    });

  // [REQUEST(COURSE_ACTION.GET_COURSE_FREE_LIST)]: (state, action) => {
  //   return {
  //     ...state,
  //     courseFreeList: {
  //       ...state.courseFreeList,
  //       loading: true,
  //     },
  //   };
  // },

  // [SUCCESS(COURSE_ACTION.GET_COURSE_FREE_LIST)]: (state, action) => {
  //   const { data } = action.payload;
  //   return {
  //     ...state,
  //     courseFreeList: {
  //       ...state.courseFreeList,
  //       data,
  //       loading: false,
  //     },
  //   };
  // },

  // [FAIL(COURSE_ACTION.GET_COURSE_FREE_LIST)]: (state, action) => {
  //   const { error } = action.payload;
  //   return {
  //     ...state,
  //     courseFreeList: {
  //       ...state.courseFreeList,
  //       error,
  //     },
  //   };
  // },
});

export default courseReducer;
