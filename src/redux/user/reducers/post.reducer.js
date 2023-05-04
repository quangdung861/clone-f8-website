import { createReducer } from "@reduxjs/toolkit";
import { FAIL, POST_ACTION, REQUEST, SUCCESS } from "../constants";

const initialState = {
  postList: {
    data: [],
    loading: false,
    error: null,
  },
};

const postReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(REQUEST(POST_ACTION.GET_POST_LIST), (state, action) => {
      return {
        ...state,
        postList: {
          ...state.postList,
          loading: true,
        },
      };
    })
    .addCase(SUCCESS(POST_ACTION.GET_POST_LIST), (state, action) => {
      const { data } = action.payload;
      return {
        ...state,
        postList: {
          ...state.postList,
          data,
          loading: false,
        },
      };
    })
    .addCase(FAIL(POST_ACTION.GET_POST_LIST), (state, action) => {
      const { error } = action.payload;
      return {
        ...state,
        postList: {
          ...state.postList,
          error,
          loading: false,
        },
      };
    });
});

export default postReducer;
