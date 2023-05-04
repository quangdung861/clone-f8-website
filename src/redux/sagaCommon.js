import { fork } from "redux-saga/effects";
import courseSaga from "./user/sagas/course.saga";
import postSaga from "./user/sagas/post.saga";
import videoSaga from "./user/sagas/video.saga";

export default function* rootSaga() {
  yield fork(courseSaga);
  yield fork(postSaga);
  yield fork(videoSaga);
}
