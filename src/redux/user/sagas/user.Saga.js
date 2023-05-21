import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import { REQUEST, SUCCESS, FAIL, USER_ACTION } from "../constants";

import { API } from "constants/api";

function* loginSaga(action) {
  try {
    const { email, password } = action.payload;
    const result = yield axios.post(`${API}/login`, {
      email,
      password,
    });
    localStorage.setItem("accessToken", result.data.accessToken);
    yield put({
      type: SUCCESS(USER_ACTION.LOGIN),
      payload: {
        data: result.data.user,
      },
    });
  } catch (error) {
    yield put({
      type: FAIL(USER_ACTION.LOGIN),
      payload: {
        error: "Email hoặc mật khẩu không chính xác",
      },
    });
  }
}

function* getUserInfoSaga(action) {
  try {
    const { id } = action.payload;
    const result = yield axios.get(`${API}/users/${id}`);
    yield put({
      type: SUCCESS(USER_ACTION.GET_USER_INFO),
      payload: {
        data: result.data,
      },
    });
  } catch (error) {
    yield put({
      type: FAIL(USER_ACTION.GET_USER_INFO),
      payload: {
        error,
      },
    });
  }
}

function* updateAvatarImageSaga(action) {
  try {
    const { userId, avatarData } = action.payload;
    const result = yield axios.get(`${API}/users/${userId}`);
    yield axios.patch(`http://localhost:4000/users/${userId}`, {
      images: {
        ...result.data.images,
        avatar: avatarData,
      },
    });
    yield put({
      type: REQUEST(USER_ACTION.GET_USER_INFO),
      payload: {
        id: userId,
      },
    });
  } catch (error) {
    yield console.log(error);
  }
}
function* updateCoverImageSaga(action) {
  try {
    const { userId, imgPreviewCover, callback } = action.payload;
    const result = yield axios.get(`${API}/users/${userId}`);
    yield axios.patch(`http://localhost:4000/users/${userId}`, {
      images: {
        ...result.data.images,
        cover: imgPreviewCover,
      },
    });
    yield put({
      type: REQUEST(USER_ACTION.GET_USER_INFO),
      payload: {
        id: userId,
      },
    });
    if (callback.resetImagePreview) yield callback.resetImagePreview();
  } catch (error) {
    yield console.log(error);
  }
}

export default function* userSaga() {
  yield takeEvery(REQUEST(USER_ACTION.LOGIN), loginSaga);
  yield takeEvery(REQUEST(USER_ACTION.GET_USER_INFO), getUserInfoSaga);
  yield takeEvery(
    REQUEST(USER_ACTION.UPDATE_AVATAR_IMAGE),
    updateAvatarImageSaga
  );
  yield takeEvery(
    REQUEST(USER_ACTION.UPDATE_COVER_IMAGE),
    updateCoverImageSaga
  );
}
