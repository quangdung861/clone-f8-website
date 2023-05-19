import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import { REQUEST, SUCCESS, FAIL, NOTIFICATION_ACTION } from "../constants";

import { API } from "constants/api";

function* getNotificationListSaga(action) {
  try {
    const { limit } = action.payload;
    const result = yield axios.get(`${API}/posts`, {
      params: {
        ...(limit && {
          _limit: limit,
        }),
      },
    });
    yield put({
      type: SUCCESS(NOTIFICATION_ACTION.GET_NOTIFICATION_LIST),
      payload: {
        data: result.data,
        meta: {
          total: result.headers["x-total-count"],
        },
      },
    });
  } catch (error) {
    yield put({
      type: FAIL(NOTIFICATION_ACTION.GET_NOTIFICATION_LIST),
      payload: {
        error,
      },
    });
  }
}

function* updateNotificationSaga(action) {
  try {
    const { id, ...values } = action.payload;
    if (id) {
      yield axios.patch(`${API}/posts/${id}`, {
        ...(values.status && {
          status: values.status,
        }),
      });
    } else {
      const result = yield axios.get(`${API}/posts`, {
        params: {
          ...(values.limit
            ? {
                _limit: values.limit,
              }
            : { _limit: 10 }),
        },
      });

      for (let i = 0; i < result.data.length; i++) {
        yield axios.patch(`${API}/posts/${result.data[i].id}`, {
          ...(values.status && {
            status: values.status,
          }),
        });
      }
    }

    yield put({
      type: SUCCESS(NOTIFICATION_ACTION.UPDATE),
    });
    yield put({
      type: REQUEST(NOTIFICATION_ACTION.GET_NOTIFICATION_LIST),
      payload: {
        limit: 10,
      },
    });
  } catch (error) {
    yield put({
      type: FAIL(NOTIFICATION_ACTION.UPDATE),
      payload: {
        error,
      },
    });
  }
}

export default function* notificationSaga() {
  yield takeEvery(
    REQUEST(NOTIFICATION_ACTION.GET_NOTIFICATION_LIST),
    getNotificationListSaga
  );
  yield takeEvery(REQUEST(NOTIFICATION_ACTION.UPDATE), updateNotificationSaga);
}
