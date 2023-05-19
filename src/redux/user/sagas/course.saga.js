import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import { REQUEST, SUCCESS, FAIL, COURSE_ACTION } from "../constants";

import { API } from "constants/api";

function* getCourseProListSaga(action) {
  try {
    const result = yield axios.get(`${API}/courses`, {
      params: {
        fee: true,
      },
    });
    yield put({
      type: SUCCESS(COURSE_ACTION.GET_COURSE_PRO_LIST),
      payload: {
        data: result.data,
      },
    });
  } catch (error) {
    yield put({
      type: FAIL(COURSE_ACTION.GET_COURSE_PRO_LIST),
      payload: {
        error,
      },
    });
  }
}

function* getCourseFreeListSaga(action) {
  try {
    const result = yield axios.get(`${API}/courses`, {
      params: {
        fee: false,
      },
    });
    yield put({
      type: SUCCESS(COURSE_ACTION.GET_COURSE_FREE_LIST),
      payload: {
        data: result.data,
      },
    });
  } catch (error) {
    yield put({
      type: FAIL(COURSE_ACTION.GET_COURSE_FREE_LIST),
      payload: {
        error,
      },
    });
  }
}

export default function* courseSaga() {
  yield takeEvery(
    REQUEST(COURSE_ACTION.GET_COURSE_PRO_LIST),
    getCourseProListSaga
  );
  yield takeEvery(
    REQUEST(COURSE_ACTION.GET_COURSE_FREE_LIST),
    getCourseFreeListSaga
  );
}
