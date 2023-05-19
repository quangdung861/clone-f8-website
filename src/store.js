import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./redux/sagaCommon";

import courseReducer from "redux/user/reducers/course.reducer";
import postReducer from "redux/user/reducers/post.reducer";
import videoReducer from "redux/user/reducers/video.reducer";
import blogReducer from "redux/user/reducers/blog.reducer";
import searchReducer from "redux/user/reducers/search.reducer";
import userReducer from "redux/user/reducers/user.reducer";
import notificationReducer from "redux/user/reducers/notification.reducer";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    courseReducer,
    postReducer,
    videoReducer,
    blogReducer,
    searchReducer,
    userReducer,
    notificationReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

export default store;
