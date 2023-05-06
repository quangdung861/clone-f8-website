import { createReducer } from "@reduxjs/toolkit";
import { FAIL, REQUEST, SEARCH_ACTION, SUCCESS } from "../constants";

const initialState = {
  searchList: {
    data: {
      courses: [],
      posts: [],
      videos: [],
    },
    loading: false,
    error: null,
  },
};

const searchReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(REQUEST(SEARCH_ACTION.GET_SEARCH_LIST), (state, action) => {
      return {
        ...state,
        searchList: {
          ...state.searchList,
          loading: true,
        },
      };
    })
    .addCase(SUCCESS(SEARCH_ACTION.GET_SEARCH_LIST), (state, action) => {
      const { data } = action.payload;
      return {
        ...state,
        searchList: {
          ...state.searchList,
          loading: false,
          data,
        },
      };
    })
    .addCase(FAIL(SEARCH_ACTION.GET_SEARCH_LIST), (state, action) => {
      const { error } = action.payload;
      return {
        ...state,
        searchList: {
          ...state.searchList,
          loading: false,
          error,
        },
      };
    });
});

export default searchReducer;
