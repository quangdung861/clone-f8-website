import { createAction } from "@reduxjs/toolkit";

import { REQUEST, NOTIFICATION_ACTION } from "../constants";

export const updateNotificationAction = createAction(
  REQUEST(NOTIFICATION_ACTION.UPDATE)
);

export const getNotificationListAction = createAction(
  REQUEST(NOTIFICATION_ACTION.GET_NOTIFICATION_LIST)
);
