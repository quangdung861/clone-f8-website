import { createReducer } from "@reduxjs/toolkit";

import { REQUEST, SUCCESS, FAIL, BLOG_ACTION } from "../constants";

const initialState = {
  blogList: {
    data: [],
    meta: {
      total: null,
      page: null,
      limit: null,
    },
    loading: false,
    error: null,
  },
};

const blogReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(REQUEST(BLOG_ACTION.GET_BLOG_LIST_ACTION), (state, action) => {
      return {
        ...state,
        blogList: {
          ...state.blogList,
          loading: true,
        },
      };
    })
    .addCase(SUCCESS(BLOG_ACTION.GET_BLOG_LIST_ACTION), (state, action) => {
      const { data, meta } = action.payload;
      return {
        ...state,
        blogList: {
          ...state.blogList,
          data,
          meta,
          loading: false,
        },
      };
    })
    .addCase(FAIL(BLOG_ACTION.GET_BLOG_LIST_ACTION), (state, action) => {
      const { error } = action.payload;
      return {
        state,
        blogList: {
          ...state.blogList,
          error,
        },
      };
    });
});

export default blogReducer;
