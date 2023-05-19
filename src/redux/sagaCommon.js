import { fork } from "redux-saga/effects";
import courseSaga from "./user/sagas/course.saga";
import postSaga from "./user/sagas/post.saga";
import videoSaga from "./user/sagas/video.saga";
import blogSaga from "./user/sagas/blog.saga";
import searchSaga from "./user/sagas/search.saga";
import userSaga from "./user/sagas/user.Saga";
import notificationSaga from "./user/sagas/notification.saga";

export default function* rootSaga() {
  yield fork(courseSaga);
  yield fork(postSaga);
  yield fork(videoSaga);
  yield fork(blogSaga);
  yield fork(searchSaga);
  yield fork(userSaga);
  yield fork(notificationSaga);
}
