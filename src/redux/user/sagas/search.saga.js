import { put, takeEvery, debounce } from "redux-saga/effects";
import axios from "axios";
import { FAIL, REQUEST, SEARCH_ACTION, SUCCESS } from "../constants";

import { API } from "constants/api";

function* getSearchListSaga(action) {
  try {
    const { params } = action.payload;
    const resultCourses = yield axios.get(`${API}/courses`, {
      params: {
        ...(params.q && {
          q: params.q,
        }),
        ...(params && {
          _limit: params.limit,
        }),
      },
    });
    const resultPosts = yield axios.get(`${API}/posts`, {
      params: {
        ...(params.q && {
          q: params.q,
        }),
        ...(params && {
          _limit: params.limit,
        }),
      },
    });
    const resultVideos = yield axios.get(`${API}/videos`, {
      params: {
        ...(params.q && {
          q: params.q,
        }),
        ...(params && {
          _limit: params.limit,
        }),
      },
    });
    yield put({
      type: SUCCESS(SEARCH_ACTION.GET_SEARCH_LIST),
      payload: {
        data: {
          courses: resultCourses.data,
          posts: resultPosts.data,
          videos: resultVideos.data,
        },
      },
    });
    if (params.q === "") {
      yield put({
        type: SUCCESS(SEARCH_ACTION.GET_SEARCH_LIST),
        payload: {
          data: {
            courses: [],
            posts: [],
            videos: [],
          },
        },
      });
    }
  } catch (error) {
    put({
      type: FAIL(SEARCH_ACTION.GET_SEARCH_LIST),
      payload: {
        error,
      },
    });
  }
}

export default function* searchSaga() {
  yield debounce(
    300,
    REQUEST(SEARCH_ACTION.GET_SEARCH_LIST),
    getSearchListSaga
  );
}
