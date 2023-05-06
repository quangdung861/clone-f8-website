import { put, takeEvery, debounce } from "redux-saga/effects";
import axios from "axios";
import { FAIL, REQUEST, SEARCH_ACTION, SUCCESS } from "../constants";

function* getSearchListSaga(action) {
  try {
    const { params } = action.payload;
    console.log("🚀 ~ file: search.saga.js:8 ~ function*getSearchListSaga ~ params:", params.q)
    const resultCourses = yield axios.get("http://localhost:4000/courses", {
      params: {
        ...(params.q && {
          q: params.q,
        }),
        _limit: 3,
      },
    });
    const resultPosts = yield axios.get("http://localhost:4000/posts", {
      params: {
        ...(params.q && {
          q: params.q,
        }),
        _limit: 3,
      },
    });
    const resultVideos = yield axios.get("http://localhost:4000/videos", {
      params: {
        ...(params.q && {
          q: params.q,
        }),
        _limit: 3,
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
