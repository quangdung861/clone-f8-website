import { createReducer } from "@reduxjs/toolkit";
import { REQUEST, SUCCESS, FAIL, VIDEO_ACTION } from "../constants";

const initialState = {
  videoList: {
    data: [],
    loading: false,
    error: null,
  },
};

const videoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(REQUEST(VIDEO_ACTION.GET_VIDEO_LIST), (state, action) => {
      return {
        ...state,
        videoList: {
          ...state.videoList,
          loading: true,
        },
      };
    })
    .addCase(SUCCESS(VIDEO_ACTION.GET_VIDEO_LIST), (state, action) => {
      const { data } = action.payload;
      return {
        ...state,
        videoList: {
          ...state.videoList,
          loading: false,
          data,
        },
      };
    })
    .addCase(FAIL(VIDEO_ACTION.GET_VIDEO_LIST), (state, action) => {
      const { error } = action.payload;
      return {
        ...state,
        videoList: {
          ...state.videoList,
          loading: false,
          error,
        },
      };
    });
});

export default videoReducer;
