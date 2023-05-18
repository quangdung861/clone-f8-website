import { createReducer } from "@reduxjs/toolkit";
import { FAIL, USER_ACTION, REQUEST, SUCCESS } from "../constants";

const initialState = {
  userInfo: {
    data: {},
    loading: false,
    error: null,
  },
  loginData: {
    loading: false,
    error: null,
  },
  registerData: {
    loading: false,
    error: null,
  },
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(REQUEST(USER_ACTION.LOGIN), (state, action) => {
      return {
        ...state,
        loginData: {
          ...state.loginData,
          loading: true,
        },
      };
    })
    .addCase(SUCCESS(USER_ACTION.LOGIN), (state, action) => {
      const { data } = action.payload;
      return {
        ...state,
        loginData: {
          ...state.loginData,
          loading: false,
        },
        userInfo: {
          ...state.userInfo,
          data: {
            id: data.id,
            email: data.email,
            fullName: data.fullName,
          },
        },
      };
    })
    .addCase(FAIL(USER_ACTION.LOGIN), (state, action) => {
      const { error } = action.payload;
      return {
        ...state,
        loginData: {
          ...state.loginData,
          loading: false,
        },
        userInfo: {
          ...state.userInfo,
          error,
        },
      };
    })
    //=======GET_USER_INFO=======
    .addCase(REQUEST(USER_ACTION.GET_USER_INFO), (state, action) => {
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          loading: true,
        },
      };
    })
    .addCase(SUCCESS(USER_ACTION.GET_USER_INFO), (state, action) => {
      const { data } = action.payload;
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          data,
          loading: false,
        },
      };
    })
    .addCase(FAIL(USER_ACTION.GET_USER_INFO), (state, action) => {
      const { error } = action.payload;
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          error,
          loading: false,
        },
      };
    })
    .addCase(REQUEST(USER_ACTION.LOGOUT), (state, action) => {
      return {
        ...state,
        userInfo: {
          data: {},
          loading: false,
          error: null,
        },
      };
    });
});

export default userReducer;
