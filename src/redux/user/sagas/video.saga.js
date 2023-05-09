import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import { REQUEST, SUCCESS, FAIL, VIDEO_ACTION } from "../constants";

function* getVideoListSaga(action) {
  try {
    const { limit } = action.payload;
    const result = yield axios.get("https://f8-server-ih5gftkoe-quangdung861.vercel.app/videos", {
      params: {
        _limit: limit,
      },
    });
    yield put({
      type: SUCCESS(VIDEO_ACTION.GET_VIDEO_LIST),
      payload: {
        data: result.data,
      },
    });
  } catch (error) {
    yield put({
      type: FAIL(VIDEO_ACTION.GET_VIDEO_LIST),
      payload: {
        error,
      },
    });
  }
}

export default function* videoSaga() {
  yield takeEvery(REQUEST(VIDEO_ACTION.GET_VIDEO_LIST), getVideoListSaga);
}
