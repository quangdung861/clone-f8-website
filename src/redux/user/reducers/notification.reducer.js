import { createReducer } from "@reduxjs/toolkit";
import { FAIL, REQUEST, SUCCESS, NOTIFICATION_ACTION } from "../constants";

const initialState = {
  notificationList: {
    data: [],
    meta: {},
    loading: false,
    error: null,
  },
  notificationUpdate: {
    loading: false,
    error: null,
  },
};

const notificationReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(
      REQUEST(NOTIFICATION_ACTION.GET_NOTIFICATION_LIST),
      (state, action) => {
        return {
          ...state,
          notificationList: {
            ...state.notificationList,
            loading: true,
          },
        };
      }
    )
    .addCase(
      SUCCESS(NOTIFICATION_ACTION.GET_NOTIFICATION_LIST),
      (state, action) => {
        const { data, meta } = action.payload;
        return {
          ...state,
          notificationList: {
            ...state.notificationList,
            data,
            meta,
            loading: false,
          },
        };
      }
    )
    .addCase(
      FAIL(NOTIFICATION_ACTION.GET_NOTIFICATION_LIST),
      (state, action) => {
        const { error } = action.payload;
        return {
          ...state,
          notificationList: {
            ...state.notificationList,
            error,
            loading: false,
          },
        };
      }
    )
    .addCase(REQUEST(NOTIFICATION_ACTION.UPDATE), (state, action) => {
      return {
        ...state,
        notificationUpdate: {
          ...state.notificationUpdate,
          loading: true,
        },
      };
    })
    .addCase(SUCCESS(NOTIFICATION_ACTION.UPDATE), (state, action) => {
      return {
        ...state,
        notificationUpdate: {
          ...state.notificationUpdate,
          loading: false,
        },
      };
    })
    .addCase(FAIL(NOTIFICATION_ACTION.UPDATE), (state, action) => {
      const { error } = action.payload;
      return {
        ...state,
        notificationUpdate: {
          ...state.notificationUpdate,
          error,
          loading: false,
        },
      };
    });
});

export default notificationReducer;
