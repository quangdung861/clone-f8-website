import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./redux/sagaCommon";

import courseReducer from "redux/user/reducers/course.reducer";
import postReducer from "redux/user/reducers/post.reducer";
import videoReducer from "redux/user/reducers/video.reducer";
import blogReducer from "redux/user/reducers/blog.reducer";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    courseReducer,
    postReducer,
    videoReducer,
    blogReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

export default store;
