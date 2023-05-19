import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import { REQUEST, SUCCESS, FAIL, POST_ACTION } from "../constants";

import { API } from "constants/api";

function* getPostListSaga(action) {
  try {
    const { limit } = action.payload;
    const result = yield axios.get(`${API}/posts`, {
      params: {
        _expand: "user",
        ...(limit && {
          _limit: limit,
        }),
      },
    });
    yield put({
      type: SUCCESS(POST_ACTION.GET_POST_LIST),
      payload: {
        data: result.data,
      },
    });
  } catch (error) {
    yield put({
      type: FAIL(POST_ACTION.GET_POST_LIST),
      payload: {
        error,
      },
    });
  }
}

export default function* postSaga() {
  yield takeEvery(REQUEST(POST_ACTION.GET_POST_LIST), getPostListSaga);
}
