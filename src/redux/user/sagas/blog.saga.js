import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { REQUEST, SUCCESS, FAIL, BLOG_ACTION } from "../constants";

import { API } from "constants/api";

function* getBlogListSaga(action) {
  try {
    const { params } = action.payload;
    const result = yield axios.get(`${API}/blogs`, {
      params: {
        _limit: params.limit,
        _page: params.page,
        _expand: "user",
      },
    });
    yield put({
      type: SUCCESS(BLOG_ACTION.GET_BLOG_LIST_ACTION),
      payload: {
        data: result.data,
        meta: {
          total: parseInt(result.headers["x-total-count"]),
          page: params.page,
          limit: params.limit,
        },
      },
    });
  } catch (error) {
    put({
      type: FAIL(BLOG_ACTION.GET_BLOG_LIST_ACTION),
      payload: {
        error,
      },
    });
  }
}

export default function* blogSaga() {
  yield takeEvery(REQUEST(BLOG_ACTION.GET_BLOG_LIST_ACTION), getBlogListSaga);
}
